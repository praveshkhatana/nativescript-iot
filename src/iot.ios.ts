import { Observable } from "tns-core-modules/data/observable";

declare var AWSIoT,
  AWSIoTDataManager,
  AWSIoTManager,
  AWSCognitoCredentialsProvider,
  AWSEndpoint,
  AWSServiceConfiguration,
  AWSServiceManager,
  AWSBasicSessionCredentialsProvider,
  AWSIoTAttachPrincipalPolicyRequest;
declare var AWSRegionType;
interface AWSRegionType { }

export class Iot extends Observable {
  private IOT_ENDPOINT: string;
  private ASWIoTDataManager = "MyIotDataManager";
  private CognitoIdentityPoolId: string;
  private PolicyName: string;
  private AWSRegion: AWSRegionType = AWSRegionType.USWest2;
  private clientId: string;
  private identityId: string;
  private credentials;
  private callback: any;

  private CertificateSigningRequestCommonName = "IOT plugin Application";
  private CertificateSigningRequestCountryName = "USA";
  private CertificateSigningRequestOrganizationName = "IOT";
  private CertificateSigningRequestOrganizationalUnitName = "Software";

  //
  private connected: boolean = false;
  private iotDataManager: AWSIoTDataManager;
  private iotManager: AWSIoTManager;
  private iot: AWSIoT;

  constructor(
    endpoint,
    cognitoPoolId,
    policyName,
    clientId,
    credentials,
    callback
  ) {
    super();
    this.AWSRegion = AWSRegionType.USWest2;
    this.IOT_ENDPOINT = endpoint;
    this.CognitoIdentityPoolId = cognitoPoolId;
    this.PolicyName = policyName;
    this.clientId = clientId;
    this.identityId = credentials.identityId;
    this.credentials = credentials;
    this.callback = callback;

    this.init();
    console.log(this.credentials.sessionToken);
    console.log(this.identityId);
  }

  public disconnect() {
    this.iotDataManager.disconnect();
  }
  public connect() {
    //console.log("connect");
    if (this.credentials != "" && this.credentials != null) {
      this.authConnect();
    } else {
      this.attachPolicy();
    }
  }
  public publish(message: string, topic: string) {
    let qos: AWSIoTMQTTQoS = AWSIoTMQTTQoS.MessageDeliveryAttemptedAtLeastOnce;
    this.iotDataManager.publishStringOnTopicQoS(message, topic, qos);
  }
  public subscribe(topic: string) {
    this.iotDataManager.subscribeToTopicQoSExtendedCallback(
      topic,
      AWSIoTMQTTQoS.MessageDeliveryAttemptedAtLeastOnce,
      (payload, p2, p3) => {
        let stringVal = NSString.alloc().initWithDataEncoding(
          p3,
          NSUTF8StringEncoding
        );
        //console.log("received: "+stringVal);
        invokeOnRunLoop(() => {
          this.callback &&
            this.callback.onSubscribe &&
            this.callback.onSubscribe(topic, stringVal);
        });
      }
    );
  }
  public unsubscribe(topic: string) {
    this.iotDataManager.unsubscribeTopic(topic);
  }
  private init() {
    let credentialsProvider;
    if (this.credentials != "" && this.credentials != null) {
      credentialsProvider = new AWSBasicSessionCredentialsProvider(
        this.credentials.accessKeyId,
        this.credentials.secretAccessKey,
        this.credentials.sessionToken
      );
    } else {
      credentialsProvider = new AWSCognitoCredentialsProvider(
        this.AWSRegion,
        this.CognitoIdentityPoolId
      );
    }

    let iotEndPoint = new AWSEndpoint(this.IOT_ENDPOINT);

    // // Configuration for AWSIoT control plane APIs
    let iotConfiguration = new AWSServiceConfiguration(
      this.AWSRegion,
      credentialsProvider
    );

    // Configuration for AWSIoT data plane APIs
    let iotDataConfiguration = new AWSServiceConfiguration(
      this.AWSRegion,
      iotEndPoint,
      credentialsProvider
    );

    AWSServiceManager.defaultServiceManager().defaultServiceConfiguration = iotConfiguration;

    this.iotManager = AWSIoTManager.defaultIoTManager();
    this.iot = AWSIoT.defaultIoT();

    AWSIoTDataManager.registerIoTDataManagerWithConfigurationForKey(
      iotDataConfiguration,
      this.ASWIoTDataManager
    );

    this.iotDataManager = AWSIoTDataManager.IoTDataManagerForKey(
      this.ASWIoTDataManager
    );
  }

  private authConnect() {
    let attachPrincipalPolicyRequest = new AWSIoTAttachPrincipalPolicyRequest();

    attachPrincipalPolicyRequest.policyName = this.PolicyName;
    attachPrincipalPolicyRequest.principal = this.identityId;

    // Attach the policy to the certificate
    this.iot.attachPrincipalPolicyCompletionHandler(
      attachPrincipalPolicyRequest,
      e => {
        console.log(e);
      }
    );
    this.iotDataManager.connectUsingWebSocketWithClientIdCleanSessionStatusCallback(
      this.clientId,
      true,
      status => {
        this.callback &&
          this.callback.onMqttEventCallback &&
          this.callback.onMqttEventCallback(status);
      }
    );
  }

  //Attach Policy If user is Guest/unAuth
  private attachPolicy() {
    let defaults = NSUserDefaults.standardUserDefaults;
    let certificateId = defaults.stringForKey("certificateId");
    console.log(certificateId);
    if (certificateId === null) {
      console.log("No identity available, searching bundle...");
      // No certificate ID has been stored in the user defaults; check to see if any .p12 files
      // exist in the bundle.
      let myBundle = NSBundle.mainBundle;
      let myImages = myBundle.pathsForResourcesOfTypeInDirectory("p12", ""); //.paths(forResourcesOfType: "p12" as String, inDirectory:nil)

      //
      if (myImages.count > 0) {
        // At least one PKCS12 file exists in the bundle.  Attempt to load the first one
        // into the keychain (the others are ignored), and set the certificate ID in the
        // user defaults as the filename.  If the PKCS12 file requires a passphrase,
        // you'll need to provide that here; this code is written to expect that the
        // PKCS12 file will not have a passphrase.
        let data = NSData.dataWithContentsOfFile(myImages[0]);
        if (data) {
          console.log("found identity " + myImages[0] + " importing...");

          if (
            AWSIoTManager.importIdentityFromPKCS12DataPassPhraseCertificateId(
              data,
              "",
              myImages[0]
            )
          ) {
            // Set the certificate ID and ARN values to indicate that we have imported
            // our identity from the PKCS12 file in the bundle.
            defaults.setValueForKey(myImages[0], "certificateId");
            defaults.setValueForKey("from-bundle", "certificateArn");

            console.log("Using certificate: " + myImages[0]);

            this.iotDataManager.connectWithClientIdCleanSessionCertificateIdStatusCallback(
              this.clientId,
              true,
              myImages[0],
              status => {
                this.callback &&
                  this.callback.onMqttEventCallback &&
                  this.callback.onMqttEventCallback(status);
              }
            );
          }
        }
      }
      //

      //
      certificateId = defaults.stringForKey("certificateId");
      if (certificateId === null) {
        console.log("No identity found in bundle, creating one...");

        let csrDictionary = new (NSDictionary as any)(
          [
            this.CertificateSigningRequestCommonName,
            this.CertificateSigningRequestCountryName,
            this.CertificateSigningRequestOrganizationName,
            this.CertificateSigningRequestOrganizationalUnitName
          ],
          [
            "commonName",
            "countryName",
            "organizationName",
            "organizationalUnitName"
          ]
        );

        this.iotManager.createKeysAndCertificateFromCsrCallback(
          csrDictionary,
          response => {
            if (response) {
              defaults.setValueForKey(response.certificateId, "certificateId");
              defaults.setValueForKey(
                response.certificateArn,
                "certificateArn"
              );
              certificateId = response.certificateId;
              console.log(
                "response certificateArn: " + response.certificateArn
              );
              console.log("response certificateId: " + response.certificateId);

              let attachPrincipalPolicyRequest = new AWSIoTAttachPrincipalPolicyRequest();

              attachPrincipalPolicyRequest.policyName = this.PolicyName;
              attachPrincipalPolicyRequest.principal = response.certificateArn;

              // Attach the policy to the certificate
              this.iot.attachPrincipalPolicyCompletionHandler(
                attachPrincipalPolicyRequest,
                e => {
                  console.log(e);
                }
              );
              this.iotDataManager.connectWithClientIdCleanSessionCertificateIdStatusCallback(
                this.clientId,
                true,
                certificateId,
                status => {
                  this.callback &&
                    this.callback.onMqttEventCallback &&
                    this.callback.onMqttEventCallback(status);
                }
              );
            } else {
              console.log("noooo");
            }
          }
        );
      }
      //
    } else {
      // Connect to the AWS IoT service
      this.iotDataManager.connectWithClientIdCleanSessionCertificateIdStatusCallback(
        this.clientId,
        true,
        certificateId,
        status => {
          this.callback &&
            this.callback.onMqttEventCallback &&
            this.callback.onMqttEventCallback(status);
        }
      );
    }
  }
}
export let invokeOnRunLoop = (function () {
  var runloop = CFRunLoopGetMain();
  return function (func) {
    CFRunLoopPerformBlock(runloop, kCFRunLoopDefaultMode, func);
    CFRunLoopWakeUp(runloop);
  }
}());