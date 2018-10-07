import { Component, OnInit } from "@angular/core";
import { Iot } from "nativescript-iot";
import { isAndroid } from "platform";
import * as storage from "nativescript-localstorage";

import "nativescript-nodeify";

global["window"] = {};
global["window"]["localStorage"] = storage;
global["window"]["addEventListener"] = args => {
  return args;
};
global["window"]["navigator"] = {};

global["navigator"] = {};

global["navigator"]["product"] = "ReactNative";
global["window"]["navigator"]["onLine"] = true;

import Amplify, { Auth } from "aws-amplify";

import aws_config from "~/aws-exports";

Amplify.configure(aws_config);

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  private iot: Iot;
  private endpoint: string = isAndroid
    ? "XXXX.iot.us-west-2.amazonaws.com"
    : "https://XXXX.iot.us-west-2.amazonaws.com";
  private cognitoPoolId: string = aws_config.Auth.identityPoolId;
  private policyName: string = "myIOTPolicy";

  connected: boolean = true;
  constructor() {
    // Use the component constructor to inject providers.
    console.log(this.endpoint);
  }

  ngOnInit(): void {
    this.auth();
  }
  connect() {
    Auth.currentSession()
      .then(data => {
        //console.log(data);
        this.iot.connect();
      })
      .catch(err => {
        console.log(err);
        this.auth();
      });

    this.connected = true;
  }
  disconnect() {
    this.iot.disconnect();
    this.connected = false;
  }
  publish() {
    this.iot.publish("Hi, I am NS Plugin", "myTopic/1");
  }
  subscribe() {
    this.iot.subscribe("myTopic/1");
  }
  auth() {
    Auth.signIn("Lina21@gmail.com", "password123")
      //Auth.signIn("test@hiregoat.com", "password@123")
      .then(data => {
        console.log("userName: " + data.username);
        let clientId = data.username;
        //
        Auth.currentCredentials()
          //Auth.currentUserCredentials()
          .then(d => {
            //console.log(d.data);
            let a = Auth.essentialCredentials(d);
            console.log(a);
            this.iot = new Iot(
              this.endpoint,
              this.cognitoPoolId,
              this.policyName,
              clientId,
              a,
              {
                onMqttEventCallback(status) {
                  console.log("mqttStatus : " + status);
                },
                onSubscribe(topic, msg) {
                  console.log("Topic : " + topic);
                  console.log("Msg : " + msg);
                }
              }
            );
          })
          .catch(err => {
            console.log("Auth current cred error: ", err);
          });
        //
      })
      .catch(err => {
        console.log("Auth error: ", err);
      });
  }
}
