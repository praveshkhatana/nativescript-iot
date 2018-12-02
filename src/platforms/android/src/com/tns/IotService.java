package com.tns;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.content.Context;

//import com.amazonaws.auth.CognitoCachingCredentialsProvider;
import com.amazonaws.auth.BasicSessionCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
// import com.amazonaws.mobileconnectors.iot.AWSIotKeystoreHelper;
// import com.amazonaws.mobileconnectors.iot.AWSIotMqttClientStatusCallback;
// import com.amazonaws.mobileconnectors.iot.AWSIotMqttLastWillAndTestament;
// import com.amazonaws.mobileconnectors.iot.AWSIotMqttManager;
// import com.amazonaws.mobileconnectors.iot.AWSIotMqttNewMessageCallback;
// import com.amazonaws.mobileconnectors.iot.AWSIotMqttQos;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.iot.AWSIotClient;
//import com.amazonaws.services.iot.model.AttachPolicyRequest;
import com.amazonaws.services.iot.model.AttachPrincipalPolicyRequest;
// import com.amazonaws.services.iot.model.CreateKeysAndCertificateRequest;
// import com.amazonaws.services.iot.model.CreateKeysAndCertificateResult;

import java.io.UnsupportedEncodingException;
import java.security.KeyStore;
import java.util.UUID;
//import java.lang.Object.JSONArray;

public class IotService {
    //
    static final String LOG_TAG = "IOTService";
    // IoT endpoint

    private String CUSTOMER_SPECIFIC_ENDPOINT;

    private String COGNITO_POOL_ID;

    private String AWS_IOT_POLICY_NAME;

    // Region of AWS IoT
    private Regions MY_REGION;

    private String KEYSTORE_NAME;
    // Password for the private key in the KeyStore
    private String KEYSTORE_PASSWORD;
    // Certificate and key aliases in the KeyStore
    private String CERTIFICATE_ID;

    Context ctx;
    AWSIotClient mIotAndroidClient;
    // AWSIotMqttManager mqttManager;
    String clientId;
    // JSONArray credentials;
    String keystorePath;
    String keystoreName;
    String keystorePassword;
    BasicSessionCredentials cred;

    String identityId;
    String accessKeyId;
    String secretAccessKey;
    String sessionToken;

    KeyStore clientKeyStore = null;
    String certificateId;

    // CognitoCachingCredentialsProvider credentialsProvider;
    // BasicSessionCredentials credentials;
    AWSStaticCredentialsProvider credentialsProvider;

    public IotService(Context context, String endpoint, String cognitoPoolId, String policyName, String client_Id,
            String _identityId, String _accessKeyId, String _secretAccessKey, String _sessionToken) {
        CUSTOMER_SPECIFIC_ENDPOINT = endpoint;
        COGNITO_POOL_ID = cognitoPoolId;
        AWS_IOT_POLICY_NAME = policyName;
        clientId = client_Id;
        identityId = _identityId;
        accessKeyId = _accessKeyId;
        secretAccessKey = _secretAccessKey;
        sessionToken = _sessionToken;
        MY_REGION = Regions.US_WEST_2;
        KEYSTORE_NAME = "iot_keystore3";
        KEYSTORE_PASSWORD = "password3";
        CERTIFICATE_ID = "default3";
        ctx = context;
        this.attachPolicy();

    }

    private void attachPolicy() {

        cred = new BasicSessionCredentials(accessKeyId, secretAccessKey, sessionToken);
        credentialsProvider = new AWSStaticCredentialsProvider(cred);

        Region region = Region.getRegion(MY_REGION);

        // Attach Policy
        mIotAndroidClient = new AWSIotClient(new AWSStaticCredentialsProvider(cred));
        mIotAndroidClient.setRegion(region);

        new Thread(new Runnable() {
            @Override
            public void run() {
                try {

                    AttachPrincipalPolicyRequest policyAttachRequest = new AttachPrincipalPolicyRequest();
                    policyAttachRequest.setPolicyName(AWS_IOT_POLICY_NAME);
                    policyAttachRequest.setPrincipal(identityId);
                    mIotAndroidClient.attachPrincipalPolicy(policyAttachRequest);

                } catch (Exception e) {
                    Log.e(LOG_TAG, "Exception occurred when generating new private key and certificate.", e);
                }
            }
        }).start();

    }

}
