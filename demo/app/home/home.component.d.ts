import { OnInit } from "@angular/core";
import "nativescript-nodeify";
export declare class HomeComponent implements OnInit {
    private iot;
    private endpoint;
    private cognitoPoolId;
    private policyName;
    connected: boolean;
    constructor();
    ngOnInit(): void;
    connect(): void;
    disconnect(): void;
    publish(): void;
    subscribe(): void;
    auth(): void;
}
