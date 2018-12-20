import { Observable } from "tns-core-modules/data/observable/observable";
import * as app from "tns-core-modules/application/application";
import * as utils from "tns-core-modules/utils/utils";

declare var com;

declare var IotService;
interface IotService { }

export class Iot extends Observable {
  private keystoreName: string = "plugin_iot";
  private keystorePassword: string = "iot_pass";
  private certificateId: string = "IOT";
  private clientId: string;
  private credentials;
  private callback: any;

  private iotService: IotService;

  //
  private CUSTOMER_SPECIFIC_ENDPOINT: string;

  private COGNITO_POOL_ID: string;

  private AWS_IOT_POLICY_NAME: string;

  // Region of AWS IoT
  private MY_REGION: any;

  private KEYSTORE_NAME: string;
  // Password for the private key in the KeyStore
  private KEYSTORE_PASSWORD: string;
  // Certificate and key aliases in the KeyStore
  private CERTIFICATE_ID: string;

  private ctx;
  public mIotAndroidClient: any;
  private mqttManager;

  private identityId: string;
  private keystorePath: string;

  private clientKeyStore: any = null;

  private credentialsProvider: any;
  private cred: any;
  private isReconnect: boolean = false;

  constructor(
    endpoint,
    cognitoPoolId,
    policyName,
    clientId,
    credentials,
    isReconnect,
    callback
  ) {
    super();
    this.CUSTOMER_SPECIFIC_ENDPOINT = endpoint;
    this.COGNITO_POOL_ID = cognitoPoolId;
    this.AWS_IOT_POLICY_NAME = policyName;
    this.clientId = clientId;
    this.credentials = credentials;
    this.MY_REGION = com.amazonaws.regions.Regions.US_WEST_2;
    this.KEYSTORE_NAME = "iot_keystore3";
    this.KEYSTORE_PASSWORD = "password3";
    this.CERTIFICATE_ID = "default3";
    this.isReconnect = isReconnect;
    this.callback = callback;

    this.ctx = utils.ad.getApplicationContext();
    //console.log("IOT ANdroid");
    this.iotService = new com.tns.IotService(
      this.ctx,
      endpoint,
      cognitoPoolId,
      policyName,
      clientId,
      credentials.identityId,
      credentials.accessKeyId,
      credentials.secretAccessKey,
      credentials.sessionToken
    );
    this.attachPolicy();
  }
  public connect() {
    try {
      let mqttCallback = new com.amazonaws.mobileconnectors.iot.AWSIotMqttClientStatusCallback(
        (status, throwable) => {
          //console.log(status);
        }
      );

      mqttCallback.onStatusChanged = (status, throwable) => {
        //console.log(status);
        this.callback &&
          this.callback.onMqttEventCallback &&
          this.callback.onMqttEventCallback(status);
      };

      this.mqttManager.connect(
        this.credentialsProvider,
        mqttCallback
      );
    } catch (e) {
      console.log("Disconnect error.", e);
    }
  }
  public destroy() {

  }
  //
  private attachPolicy() {
    this.cred = new com.amazonaws.auth.BasicSessionCredentials(
      this.credentials.accessKeyId,
      this.credentials.secretAccessKey,
      this.credentials.sessionToken
    );
    this.credentialsProvider = new com.amazonaws.auth.AWSStaticCredentialsProvider(
      this.cred
    );
    let region = com.amazonaws.regions.Region.getRegion(this.MY_REGION);

    // MQTT Client AWSIotMqttManager
    this.mqttManager = new com.amazonaws.mobileconnectors.iot.AWSIotMqttManager(
      this.clientId,
      this.CUSTOMER_SPECIFIC_ENDPOINT
    );

    // Set keepalive to 10 seconds.  Will recognize disconnects more quickly but will also send
    // MQTT pings every 10 seconds.
    this.mqttManager.setKeepAlive(10);

    // Set Last Will and Testament for MQTT.  On an unclean disconnect (loss of connection)
    // AWS IoT will publish this message to alert other clients.
    let lwt = new com.amazonaws.mobileconnectors.iot.AWSIotMqttLastWillAndTestament(
      "my/lwt/topic",
      "Android client lost connection",
      com.amazonaws.mobileconnectors.iot.AWSIotMqttQos.QOS0
    );
    this.mqttManager.setMqttLastWillAndTestament(lwt);
    if (this.isReconnect) {
      this.connect();
    }
  }

  public disconnect() {
    try {
      this.mqttManager.disconnect();
      console.log("Disconnected");
    } catch (e) {
      console.log("Disconnect error.", e);
    }
  }

  public publish(msg, topic) {
    try {
      this.mqttManager.publishString(
        msg,
        topic,
        com.amazonaws.mobileconnectors.iot.AWSIotMqttQos.QOS0
      );
    } catch (e) {
      console.log("Publish error.", e);
    }
  }

  public subscribe(topic) {
    try {
      let mqttCallback = new com.amazonaws.mobileconnectors.iot.AWSIotMqttNewMessageCallback(
        (topic, data) => {
          console.log("TOPIC: " + topic);
        }
      );

      mqttCallback.onMessageArrived = (topic, data) => {
        console.log("Message arrived:");
        console.log("   Topic: " + topic);

        data = this.uintToString(data);
        //console.log(" Message: " + data.toString());
        this.callback &&
          this.callback.onSubscribe &&
          this.callback.onSubscribe(topic, data);
      };


      this.mqttManager.subscribeToTopic(
        topic,
        com.amazonaws.mobileconnectors.iot.AWSIotMqttQos.QOS0,
        mqttCallback
      );
    } catch (e) {
      console.log("Subscription error.", e);
    }
  }
  private uintToString(uintArray) {
    var encodedString = String.fromCharCode.apply(null, uintArray),
      decodedString = decodeURIComponent(escape(encodedString));
    return decodedString;
  }
  public unsubscribe(topic) {
    this.mqttManager.unsubscribeTopic(topic);
  }

}
