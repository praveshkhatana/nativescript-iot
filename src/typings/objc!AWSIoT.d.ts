
declare class AWSIoT extends AWSService {

	static IoTForKey(key: string): AWSIoT;

	static alloc(): AWSIoT; // inherited from NSObject

	static defaultIoT(): AWSIoT;

	static new(): AWSIoT; // inherited from NSObject

	static registerIoTWithConfigurationForKey(configuration: AWSServiceConfiguration, key: string): void;

	static removeIoTForKey(key: string): void;

	readonly configuration: AWSServiceConfiguration;

	acceptCertificateTransfer(request: AWSIoTAcceptCertificateTransferRequest): AWSTask<any>;

	acceptCertificateTransferCompletionHandler(request: AWSIoTAcceptCertificateTransferRequest, completionHandler: (p1: NSError) => void): void;

	attachPrincipalPolicy(request: AWSIoTAttachPrincipalPolicyRequest): AWSTask<any>;

	attachPrincipalPolicyCompletionHandler(request: AWSIoTAttachPrincipalPolicyRequest, completionHandler: (p1: NSError) => void): void;

	attachThingPrincipal(request: AWSIoTAttachThingPrincipalRequest): AWSTask<AWSIoTAttachThingPrincipalResponse>;

	attachThingPrincipalCompletionHandler(request: AWSIoTAttachThingPrincipalRequest, completionHandler: (p1: AWSIoTAttachThingPrincipalResponse, p2: NSError) => void): void;

	cancelCertificateTransfer(request: AWSIoTCancelCertificateTransferRequest): AWSTask<any>;

	cancelCertificateTransferCompletionHandler(request: AWSIoTCancelCertificateTransferRequest, completionHandler: (p1: NSError) => void): void;

	createCertificateFromCsr(request: AWSIoTCreateCertificateFromCsrRequest): AWSTask<AWSIoTCreateCertificateFromCsrResponse>;

	createCertificateFromCsrCompletionHandler(request: AWSIoTCreateCertificateFromCsrRequest, completionHandler: (p1: AWSIoTCreateCertificateFromCsrResponse, p2: NSError) => void): void;

	createKeysAndCertificate(request: AWSIoTCreateKeysAndCertificateRequest): AWSTask<AWSIoTCreateKeysAndCertificateResponse>;

	createKeysAndCertificateCompletionHandler(request: AWSIoTCreateKeysAndCertificateRequest, completionHandler: (p1: AWSIoTCreateKeysAndCertificateResponse, p2: NSError) => void): void;

	createPolicy(request: AWSIoTCreatePolicyRequest): AWSTask<AWSIoTCreatePolicyResponse>;

	createPolicyCompletionHandler(request: AWSIoTCreatePolicyRequest, completionHandler: (p1: AWSIoTCreatePolicyResponse, p2: NSError) => void): void;

	createPolicyVersion(request: AWSIoTCreatePolicyVersionRequest): AWSTask<AWSIoTCreatePolicyVersionResponse>;

	createPolicyVersionCompletionHandler(request: AWSIoTCreatePolicyVersionRequest, completionHandler: (p1: AWSIoTCreatePolicyVersionResponse, p2: NSError) => void): void;

	createThing(request: AWSIoTCreateThingRequest): AWSTask<AWSIoTCreateThingResponse>;

	createThingCompletionHandler(request: AWSIoTCreateThingRequest, completionHandler: (p1: AWSIoTCreateThingResponse, p2: NSError) => void): void;

	createThingType(request: AWSIoTCreateThingTypeRequest): AWSTask<AWSIoTCreateThingTypeResponse>;

	createThingTypeCompletionHandler(request: AWSIoTCreateThingTypeRequest, completionHandler: (p1: AWSIoTCreateThingTypeResponse, p2: NSError) => void): void;

	createTopicRule(request: AWSIoTCreateTopicRuleRequest): AWSTask<any>;

	createTopicRuleCompletionHandler(request: AWSIoTCreateTopicRuleRequest, completionHandler: (p1: NSError) => void): void;

	deleteCACertificate(request: AWSIoTDeleteCACertificateRequest): AWSTask<AWSIoTDeleteCACertificateResponse>;

	deleteCACertificateCompletionHandler(request: AWSIoTDeleteCACertificateRequest, completionHandler: (p1: AWSIoTDeleteCACertificateResponse, p2: NSError) => void): void;

	deleteCertificate(request: AWSIoTDeleteCertificateRequest): AWSTask<any>;

	deleteCertificateCompletionHandler(request: AWSIoTDeleteCertificateRequest, completionHandler: (p1: NSError) => void): void;

	deletePolicy(request: AWSIoTDeletePolicyRequest): AWSTask<any>;

	deletePolicyCompletionHandler(request: AWSIoTDeletePolicyRequest, completionHandler: (p1: NSError) => void): void;

	deletePolicyVersion(request: AWSIoTDeletePolicyVersionRequest): AWSTask<any>;

	deletePolicyVersionCompletionHandler(request: AWSIoTDeletePolicyVersionRequest, completionHandler: (p1: NSError) => void): void;

	deleteRegistrationCode(request: AWSIoTDeleteRegistrationCodeRequest): AWSTask<AWSIoTDeleteRegistrationCodeResponse>;

	deleteRegistrationCodeCompletionHandler(request: AWSIoTDeleteRegistrationCodeRequest, completionHandler: (p1: AWSIoTDeleteRegistrationCodeResponse, p2: NSError) => void): void;

	deleteThing(request: AWSIoTDeleteThingRequest): AWSTask<AWSIoTDeleteThingResponse>;

	deleteThingCompletionHandler(request: AWSIoTDeleteThingRequest, completionHandler: (p1: AWSIoTDeleteThingResponse, p2: NSError) => void): void;

	deleteThingType(request: AWSIoTDeleteThingTypeRequest): AWSTask<AWSIoTDeleteThingTypeResponse>;

	deleteThingTypeCompletionHandler(request: AWSIoTDeleteThingTypeRequest, completionHandler: (p1: AWSIoTDeleteThingTypeResponse, p2: NSError) => void): void;

	deleteTopicRule(request: AWSIoTDeleteTopicRuleRequest): AWSTask<any>;

	deleteTopicRuleCompletionHandler(request: AWSIoTDeleteTopicRuleRequest, completionHandler: (p1: NSError) => void): void;

	deprecateThingType(request: AWSIoTDeprecateThingTypeRequest): AWSTask<AWSIoTDeprecateThingTypeResponse>;

	deprecateThingTypeCompletionHandler(request: AWSIoTDeprecateThingTypeRequest, completionHandler: (p1: AWSIoTDeprecateThingTypeResponse, p2: NSError) => void): void;

	describeCACertificate(request: AWSIoTDescribeCACertificateRequest): AWSTask<AWSIoTDescribeCACertificateResponse>;

	describeCACertificateCompletionHandler(request: AWSIoTDescribeCACertificateRequest, completionHandler: (p1: AWSIoTDescribeCACertificateResponse, p2: NSError) => void): void;

	describeCertificate(request: AWSIoTDescribeCertificateRequest): AWSTask<AWSIoTDescribeCertificateResponse>;

	describeCertificateCompletionHandler(request: AWSIoTDescribeCertificateRequest, completionHandler: (p1: AWSIoTDescribeCertificateResponse, p2: NSError) => void): void;

	describeEndpoint(request: AWSIoTDescribeEndpointRequest): AWSTask<AWSIoTDescribeEndpointResponse>;

	describeEndpointCompletionHandler(request: AWSIoTDescribeEndpointRequest, completionHandler: (p1: AWSIoTDescribeEndpointResponse, p2: NSError) => void): void;

	describeThing(request: AWSIoTDescribeThingRequest): AWSTask<AWSIoTDescribeThingResponse>;

	describeThingCompletionHandler(request: AWSIoTDescribeThingRequest, completionHandler: (p1: AWSIoTDescribeThingResponse, p2: NSError) => void): void;

	describeThingType(request: AWSIoTDescribeThingTypeRequest): AWSTask<AWSIoTDescribeThingTypeResponse>;

	describeThingTypeCompletionHandler(request: AWSIoTDescribeThingTypeRequest, completionHandler: (p1: AWSIoTDescribeThingTypeResponse, p2: NSError) => void): void;

	detachPrincipalPolicy(request: AWSIoTDetachPrincipalPolicyRequest): AWSTask<any>;

	detachPrincipalPolicyCompletionHandler(request: AWSIoTDetachPrincipalPolicyRequest, completionHandler: (p1: NSError) => void): void;

	detachThingPrincipal(request: AWSIoTDetachThingPrincipalRequest): AWSTask<AWSIoTDetachThingPrincipalResponse>;

	detachThingPrincipalCompletionHandler(request: AWSIoTDetachThingPrincipalRequest, completionHandler: (p1: AWSIoTDetachThingPrincipalResponse, p2: NSError) => void): void;

	disableTopicRule(request: AWSIoTDisableTopicRuleRequest): AWSTask<any>;

	disableTopicRuleCompletionHandler(request: AWSIoTDisableTopicRuleRequest, completionHandler: (p1: NSError) => void): void;

	enableTopicRule(request: AWSIoTEnableTopicRuleRequest): AWSTask<any>;

	enableTopicRuleCompletionHandler(request: AWSIoTEnableTopicRuleRequest, completionHandler: (p1: NSError) => void): void;

	getLoggingOptions(request: AWSIoTGetLoggingOptionsRequest): AWSTask<AWSIoTGetLoggingOptionsResponse>;

	getLoggingOptionsCompletionHandler(request: AWSIoTGetLoggingOptionsRequest, completionHandler: (p1: AWSIoTGetLoggingOptionsResponse, p2: NSError) => void): void;

	getPolicy(request: AWSIoTGetPolicyRequest): AWSTask<AWSIoTGetPolicyResponse>;

	getPolicyCompletionHandler(request: AWSIoTGetPolicyRequest, completionHandler: (p1: AWSIoTGetPolicyResponse, p2: NSError) => void): void;

	getPolicyVersion(request: AWSIoTGetPolicyVersionRequest): AWSTask<AWSIoTGetPolicyVersionResponse>;

	getPolicyVersionCompletionHandler(request: AWSIoTGetPolicyVersionRequest, completionHandler: (p1: AWSIoTGetPolicyVersionResponse, p2: NSError) => void): void;

	getRegistrationCode(request: AWSIoTGetRegistrationCodeRequest): AWSTask<AWSIoTGetRegistrationCodeResponse>;

	getRegistrationCodeCompletionHandler(request: AWSIoTGetRegistrationCodeRequest, completionHandler: (p1: AWSIoTGetRegistrationCodeResponse, p2: NSError) => void): void;

	getTopicRule(request: AWSIoTGetTopicRuleRequest): AWSTask<AWSIoTGetTopicRuleResponse>;

	getTopicRuleCompletionHandler(request: AWSIoTGetTopicRuleRequest, completionHandler: (p1: AWSIoTGetTopicRuleResponse, p2: NSError) => void): void;

	listCACertificates(request: AWSIoTListCACertificatesRequest): AWSTask<AWSIoTListCACertificatesResponse>;

	listCACertificatesCompletionHandler(request: AWSIoTListCACertificatesRequest, completionHandler: (p1: AWSIoTListCACertificatesResponse, p2: NSError) => void): void;

	listCertificates(request: AWSIoTListCertificatesRequest): AWSTask<AWSIoTListCertificatesResponse>;

	listCertificatesByCA(request: AWSIoTListCertificatesByCARequest): AWSTask<AWSIoTListCertificatesByCAResponse>;

	listCertificatesByCACompletionHandler(request: AWSIoTListCertificatesByCARequest, completionHandler: (p1: AWSIoTListCertificatesByCAResponse, p2: NSError) => void): void;

	listCertificatesCompletionHandler(request: AWSIoTListCertificatesRequest, completionHandler: (p1: AWSIoTListCertificatesResponse, p2: NSError) => void): void;

	listOutgoingCertificates(request: AWSIoTListOutgoingCertificatesRequest): AWSTask<AWSIoTListOutgoingCertificatesResponse>;

	listOutgoingCertificatesCompletionHandler(request: AWSIoTListOutgoingCertificatesRequest, completionHandler: (p1: AWSIoTListOutgoingCertificatesResponse, p2: NSError) => void): void;

	listPolicies(request: AWSIoTListPoliciesRequest): AWSTask<AWSIoTListPoliciesResponse>;

	listPoliciesCompletionHandler(request: AWSIoTListPoliciesRequest, completionHandler: (p1: AWSIoTListPoliciesResponse, p2: NSError) => void): void;

	listPolicyPrincipals(request: AWSIoTListPolicyPrincipalsRequest): AWSTask<AWSIoTListPolicyPrincipalsResponse>;

	listPolicyPrincipalsCompletionHandler(request: AWSIoTListPolicyPrincipalsRequest, completionHandler: (p1: AWSIoTListPolicyPrincipalsResponse, p2: NSError) => void): void;

	listPolicyVersions(request: AWSIoTListPolicyVersionsRequest): AWSTask<AWSIoTListPolicyVersionsResponse>;

	listPolicyVersionsCompletionHandler(request: AWSIoTListPolicyVersionsRequest, completionHandler: (p1: AWSIoTListPolicyVersionsResponse, p2: NSError) => void): void;

	listPrincipalPolicies(request: AWSIoTListPrincipalPoliciesRequest): AWSTask<AWSIoTListPrincipalPoliciesResponse>;

	listPrincipalPoliciesCompletionHandler(request: AWSIoTListPrincipalPoliciesRequest, completionHandler: (p1: AWSIoTListPrincipalPoliciesResponse, p2: NSError) => void): void;

	listPrincipalThings(request: AWSIoTListPrincipalThingsRequest): AWSTask<AWSIoTListPrincipalThingsResponse>;

	listPrincipalThingsCompletionHandler(request: AWSIoTListPrincipalThingsRequest, completionHandler: (p1: AWSIoTListPrincipalThingsResponse, p2: NSError) => void): void;

	listThingPrincipals(request: AWSIoTListThingPrincipalsRequest): AWSTask<AWSIoTListThingPrincipalsResponse>;

	listThingPrincipalsCompletionHandler(request: AWSIoTListThingPrincipalsRequest, completionHandler: (p1: AWSIoTListThingPrincipalsResponse, p2: NSError) => void): void;

	listThingTypes(request: AWSIoTListThingTypesRequest): AWSTask<AWSIoTListThingTypesResponse>;

	listThingTypesCompletionHandler(request: AWSIoTListThingTypesRequest, completionHandler: (p1: AWSIoTListThingTypesResponse, p2: NSError) => void): void;

	listThings(request: AWSIoTListThingsRequest): AWSTask<AWSIoTListThingsResponse>;

	listThingsCompletionHandler(request: AWSIoTListThingsRequest, completionHandler: (p1: AWSIoTListThingsResponse, p2: NSError) => void): void;

	listTopicRules(request: AWSIoTListTopicRulesRequest): AWSTask<AWSIoTListTopicRulesResponse>;

	listTopicRulesCompletionHandler(request: AWSIoTListTopicRulesRequest, completionHandler: (p1: AWSIoTListTopicRulesResponse, p2: NSError) => void): void;

	registerCACertificate(request: AWSIoTRegisterCACertificateRequest): AWSTask<AWSIoTRegisterCACertificateResponse>;

	registerCACertificateCompletionHandler(request: AWSIoTRegisterCACertificateRequest, completionHandler: (p1: AWSIoTRegisterCACertificateResponse, p2: NSError) => void): void;

	registerCertificate(request: AWSIoTRegisterCertificateRequest): AWSTask<AWSIoTRegisterCertificateResponse>;

	registerCertificateCompletionHandler(request: AWSIoTRegisterCertificateRequest, completionHandler: (p1: AWSIoTRegisterCertificateResponse, p2: NSError) => void): void;

	rejectCertificateTransfer(request: AWSIoTRejectCertificateTransferRequest): AWSTask<any>;

	rejectCertificateTransferCompletionHandler(request: AWSIoTRejectCertificateTransferRequest, completionHandler: (p1: NSError) => void): void;

	replaceTopicRule(request: AWSIoTReplaceTopicRuleRequest): AWSTask<any>;

	replaceTopicRuleCompletionHandler(request: AWSIoTReplaceTopicRuleRequest, completionHandler: (p1: NSError) => void): void;

	setDefaultPolicyVersion(request: AWSIoTSetDefaultPolicyVersionRequest): AWSTask<any>;

	setDefaultPolicyVersionCompletionHandler(request: AWSIoTSetDefaultPolicyVersionRequest, completionHandler: (p1: NSError) => void): void;

	setLoggingOptions(request: AWSIoTSetLoggingOptionsRequest): AWSTask<any>;

	setLoggingOptionsCompletionHandler(request: AWSIoTSetLoggingOptionsRequest, completionHandler: (p1: NSError) => void): void;

	transferCertificate(request: AWSIoTTransferCertificateRequest): AWSTask<AWSIoTTransferCertificateResponse>;

	transferCertificateCompletionHandler(request: AWSIoTTransferCertificateRequest, completionHandler: (p1: AWSIoTTransferCertificateResponse, p2: NSError) => void): void;

	updateCACertificate(request: AWSIoTUpdateCACertificateRequest): AWSTask<any>;

	updateCACertificateCompletionHandler(request: AWSIoTUpdateCACertificateRequest, completionHandler: (p1: NSError) => void): void;

	updateCertificate(request: AWSIoTUpdateCertificateRequest): AWSTask<any>;

	updateCertificateCompletionHandler(request: AWSIoTUpdateCertificateRequest, completionHandler: (p1: NSError) => void): void;

	updateThing(request: AWSIoTUpdateThingRequest): AWSTask<AWSIoTUpdateThingResponse>;

	updateThingCompletionHandler(request: AWSIoTUpdateThingRequest, completionHandler: (p1: AWSIoTUpdateThingResponse, p2: NSError) => void): void;
}

declare class AWSIoTAcceptCertificateTransferRequest extends AWSRequest {

	static alloc(): AWSIoTAcceptCertificateTransferRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTAcceptCertificateTransferRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTAcceptCertificateTransferRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTAcceptCertificateTransferRequest; // inherited from AWSMTLModel

	static new(): AWSIoTAcceptCertificateTransferRequest; // inherited from NSObject

	certificateId: string;

	setAsActive: number;
}

declare class AWSIoTAction extends AWSModel {

	static alloc(): AWSIoTAction; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTAction; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTAction; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTAction; // inherited from AWSMTLModel

	static new(): AWSIoTAction; // inherited from NSObject

	cloudwatchAlarm: AWSIoTCloudwatchAlarmAction;

	cloudwatchMetric: AWSIoTCloudwatchMetricAction;

	dynamoDB: AWSIoTDynamoDBAction;

	dynamoDBv2: AWSIoTDynamoDBv2Action;

	elasticsearch: AWSIoTElasticsearchAction;

	firehose: AWSIoTFirehoseAction;

	kinesis: AWSIoTKinesisAction;

	lambda: AWSIoTLambdaAction;

	republish: AWSIoTRepublishAction;

	s3: AWSIoTS3Action;

	sns: AWSIoTSnsAction;

	sqs: AWSIoTSqsAction;
}

declare class AWSIoTAttachPrincipalPolicyRequest extends AWSRequest {

	static alloc(): AWSIoTAttachPrincipalPolicyRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTAttachPrincipalPolicyRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTAttachPrincipalPolicyRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTAttachPrincipalPolicyRequest; // inherited from AWSMTLModel

	static new(): AWSIoTAttachPrincipalPolicyRequest; // inherited from NSObject

	policyName: string;

	principal: string;
}

declare class AWSIoTAttachThingPrincipalRequest extends AWSRequest {

	static alloc(): AWSIoTAttachThingPrincipalRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTAttachThingPrincipalRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTAttachThingPrincipalRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTAttachThingPrincipalRequest; // inherited from AWSMTLModel

	static new(): AWSIoTAttachThingPrincipalRequest; // inherited from NSObject

	principal: string;

	thingName: string;
}

declare class AWSIoTAttachThingPrincipalResponse extends AWSModel {

	static alloc(): AWSIoTAttachThingPrincipalResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTAttachThingPrincipalResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTAttachThingPrincipalResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTAttachThingPrincipalResponse; // inherited from AWSMTLModel

	static new(): AWSIoTAttachThingPrincipalResponse; // inherited from NSObject
}

declare class AWSIoTAttributePayload extends AWSModel {

	static alloc(): AWSIoTAttributePayload; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTAttributePayload; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTAttributePayload; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTAttributePayload; // inherited from AWSMTLModel

	static new(): AWSIoTAttributePayload; // inherited from NSObject

	attributes: NSDictionary<string, string>;

	merge: number;
}

declare const enum AWSIoTAutoRegistrationStatus {

	Unknown = 0,

	Enable = 1,

	Disable = 2
}

declare class AWSIoTCACertificate extends AWSModel {

	static alloc(): AWSIoTCACertificate; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCACertificate; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCACertificate; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCACertificate; // inherited from AWSMTLModel

	static new(): AWSIoTCACertificate; // inherited from NSObject

	certificateArn: string;

	certificateId: string;

	creationDate: Date;

	status: AWSIoTCACertificateStatus;
}

declare class AWSIoTCACertificateDescription extends AWSModel {

	static alloc(): AWSIoTCACertificateDescription; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCACertificateDescription; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCACertificateDescription; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCACertificateDescription; // inherited from AWSMTLModel

	static new(): AWSIoTCACertificateDescription; // inherited from NSObject

	autoRegistrationStatus: AWSIoTAutoRegistrationStatus;

	certificateArn: string;

	certificateId: string;

	certificatePem: string;

	creationDate: Date;

	ownedBy: string;

	status: AWSIoTCACertificateStatus;
}

declare const enum AWSIoTCACertificateStatus {

	Unknown = 0,

	Active = 1,

	Inactive = 2
}

declare class AWSIoTCancelCertificateTransferRequest extends AWSRequest {

	static alloc(): AWSIoTCancelCertificateTransferRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCancelCertificateTransferRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCancelCertificateTransferRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCancelCertificateTransferRequest; // inherited from AWSMTLModel

	static new(): AWSIoTCancelCertificateTransferRequest; // inherited from NSObject

	certificateId: string;
}

declare const enum AWSIoTCannedAccessControlList {

	Unknown = 0,

	Private = 1,

	PublicRead = 2,

	PublicReadWrite = 3,

	AwsExecRead = 4,

	AuthenticatedRead = 5,

	BucketOwnerRead = 6,

	BucketOwnerFullControl = 7,

	LogDeliveryWrite = 8
}

declare class AWSIoTCertificate extends AWSModel {

	static alloc(): AWSIoTCertificate; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCertificate; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCertificate; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCertificate; // inherited from AWSMTLModel

	static new(): AWSIoTCertificate; // inherited from NSObject

	certificateArn: string;

	certificateId: string;

	creationDate: Date;

	status: AWSIoTCertificateStatus;
}

declare class AWSIoTCertificateDescription extends AWSModel {

	static alloc(): AWSIoTCertificateDescription; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCertificateDescription; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCertificateDescription; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCertificateDescription; // inherited from AWSMTLModel

	static new(): AWSIoTCertificateDescription; // inherited from NSObject

	caCertificateId: string;

	certificateArn: string;

	certificateId: string;

	certificatePem: string;

	creationDate: Date;

	lastModifiedDate: Date;

	ownedBy: string;

	previousOwnedBy: string;

	status: AWSIoTCertificateStatus;

	transferData: AWSIoTTransferData;
}

declare const enum AWSIoTCertificateStatus {

	Unknown = 0,

	Active = 1,

	Inactive = 2,

	Revoked = 3,

	PendingTransfer = 4,

	RegisterInactive = 5,

	PendingActivation = 6
}

declare class AWSIoTCloudwatchAlarmAction extends AWSModel {

	static alloc(): AWSIoTCloudwatchAlarmAction; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCloudwatchAlarmAction; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCloudwatchAlarmAction; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCloudwatchAlarmAction; // inherited from AWSMTLModel

	static new(): AWSIoTCloudwatchAlarmAction; // inherited from NSObject

	alarmName: string;

	roleArn: string;

	stateReason: string;

	stateValue: string;
}

declare class AWSIoTCloudwatchMetricAction extends AWSModel {

	static alloc(): AWSIoTCloudwatchMetricAction; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCloudwatchMetricAction; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCloudwatchMetricAction; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCloudwatchMetricAction; // inherited from AWSMTLModel

	static new(): AWSIoTCloudwatchMetricAction; // inherited from NSObject

	metricName: string;

	metricNamespace: string;

	metricTimestamp: string;

	metricUnit: string;

	metricValue: string;

	roleArn: string;
}

declare class AWSIoTCreateCertificateFromCsrRequest extends AWSRequest {

	static alloc(): AWSIoTCreateCertificateFromCsrRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateCertificateFromCsrRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateCertificateFromCsrRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCreateCertificateFromCsrRequest; // inherited from AWSMTLModel

	static new(): AWSIoTCreateCertificateFromCsrRequest; // inherited from NSObject

	certificateSigningRequest: string;

	setAsActive: number;
}

declare class AWSIoTCreateCertificateFromCsrResponse extends AWSModel {

	static alloc(): AWSIoTCreateCertificateFromCsrResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateCertificateFromCsrResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateCertificateFromCsrResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCreateCertificateFromCsrResponse; // inherited from AWSMTLModel

	static new(): AWSIoTCreateCertificateFromCsrResponse; // inherited from NSObject

	certificateArn: string;

	certificateId: string;

	certificatePem: string;
}

declare class AWSIoTCreateCertificateResponse extends AWSModel {

	static alloc(): AWSIoTCreateCertificateResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateCertificateResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateCertificateResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCreateCertificateResponse; // inherited from AWSMTLModel

	static new(): AWSIoTCreateCertificateResponse; // inherited from NSObject

	certificateArn: string;

	certificateId: string;

	certificatePem: string;
}

declare class AWSIoTCreateKeysAndCertificateRequest extends AWSRequest {

	static alloc(): AWSIoTCreateKeysAndCertificateRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateKeysAndCertificateRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateKeysAndCertificateRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCreateKeysAndCertificateRequest; // inherited from AWSMTLModel

	static new(): AWSIoTCreateKeysAndCertificateRequest; // inherited from NSObject

	setAsActive: number;
}

declare class AWSIoTCreateKeysAndCertificateResponse extends AWSModel {

	static alloc(): AWSIoTCreateKeysAndCertificateResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateKeysAndCertificateResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateKeysAndCertificateResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCreateKeysAndCertificateResponse; // inherited from AWSMTLModel

	static new(): AWSIoTCreateKeysAndCertificateResponse; // inherited from NSObject

	certificateArn: string;

	certificateId: string;

	certificatePem: string;

	keyPair: AWSIoTKeyPair;
}

declare class AWSIoTCreatePolicyRequest extends AWSRequest {

	static alloc(): AWSIoTCreatePolicyRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCreatePolicyRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCreatePolicyRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCreatePolicyRequest; // inherited from AWSMTLModel

	static new(): AWSIoTCreatePolicyRequest; // inherited from NSObject

	policyDocument: string;

	policyName: string;
}

declare class AWSIoTCreatePolicyResponse extends AWSModel {

	static alloc(): AWSIoTCreatePolicyResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCreatePolicyResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCreatePolicyResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCreatePolicyResponse; // inherited from AWSMTLModel

	static new(): AWSIoTCreatePolicyResponse; // inherited from NSObject

	policyArn: string;

	policyDocument: string;

	policyName: string;

	policyVersionId: string;
}

declare class AWSIoTCreatePolicyVersionRequest extends AWSRequest {

	static alloc(): AWSIoTCreatePolicyVersionRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCreatePolicyVersionRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCreatePolicyVersionRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCreatePolicyVersionRequest; // inherited from AWSMTLModel

	static new(): AWSIoTCreatePolicyVersionRequest; // inherited from NSObject

	policyDocument: string;

	policyName: string;

	setAsDefault: number;
}

declare class AWSIoTCreatePolicyVersionResponse extends AWSModel {

	static alloc(): AWSIoTCreatePolicyVersionResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCreatePolicyVersionResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCreatePolicyVersionResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCreatePolicyVersionResponse; // inherited from AWSMTLModel

	static new(): AWSIoTCreatePolicyVersionResponse; // inherited from NSObject

	isDefaultVersion: number;

	policyArn: string;

	policyDocument: string;

	policyVersionId: string;
}

declare class AWSIoTCreateThingRequest extends AWSRequest {

	static alloc(): AWSIoTCreateThingRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateThingRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateThingRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCreateThingRequest; // inherited from AWSMTLModel

	static new(): AWSIoTCreateThingRequest; // inherited from NSObject

	attributePayload: AWSIoTAttributePayload;

	thingName: string;

	thingTypeName: string;
}

declare class AWSIoTCreateThingResponse extends AWSModel {

	static alloc(): AWSIoTCreateThingResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateThingResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateThingResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCreateThingResponse; // inherited from AWSMTLModel

	static new(): AWSIoTCreateThingResponse; // inherited from NSObject

	thingArn: string;

	thingName: string;
}

declare class AWSIoTCreateThingTypeRequest extends AWSRequest {

	static alloc(): AWSIoTCreateThingTypeRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateThingTypeRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateThingTypeRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCreateThingTypeRequest; // inherited from AWSMTLModel

	static new(): AWSIoTCreateThingTypeRequest; // inherited from NSObject

	thingTypeName: string;

	thingTypeProperties: AWSIoTThingTypeProperties;
}

declare class AWSIoTCreateThingTypeResponse extends AWSModel {

	static alloc(): AWSIoTCreateThingTypeResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateThingTypeResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateThingTypeResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCreateThingTypeResponse; // inherited from AWSMTLModel

	static new(): AWSIoTCreateThingTypeResponse; // inherited from NSObject

	thingTypeArn: string;

	thingTypeName: string;
}

declare class AWSIoTCreateTopicRuleRequest extends AWSRequest {

	static alloc(): AWSIoTCreateTopicRuleRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateTopicRuleRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTCreateTopicRuleRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTCreateTopicRuleRequest; // inherited from AWSMTLModel

	static new(): AWSIoTCreateTopicRuleRequest; // inherited from NSObject

	ruleName: string;

	topicRulePayload: AWSIoTTopicRulePayload;
}

declare class AWSIoTData extends AWSService {

	static IoTDataForKey(key: string): AWSIoTData;

	static alloc(): AWSIoTData; // inherited from NSObject

	static defaultIoTData(): AWSIoTData;

	static new(): AWSIoTData; // inherited from NSObject

	static registerIoTDataWithConfigurationForKey(configuration: AWSServiceConfiguration, key: string): void;

	static removeIoTDataForKey(key: string): void;

	readonly configuration: AWSServiceConfiguration;

	deleteThingShadow(request: AWSIoTDataDeleteThingShadowRequest): AWSTask<AWSIoTDataDeleteThingShadowResponse>;

	deleteThingShadowCompletionHandler(request: AWSIoTDataDeleteThingShadowRequest, completionHandler: (p1: AWSIoTDataDeleteThingShadowResponse, p2: NSError) => void): void;

	getThingShadow(request: AWSIoTDataGetThingShadowRequest): AWSTask<AWSIoTDataGetThingShadowResponse>;

	getThingShadowCompletionHandler(request: AWSIoTDataGetThingShadowRequest, completionHandler: (p1: AWSIoTDataGetThingShadowResponse, p2: NSError) => void): void;

	publish(request: AWSIoTDataPublishRequest): AWSTask<any>;

	publishCompletionHandler(request: AWSIoTDataPublishRequest, completionHandler: (p1: NSError) => void): void;

	updateThingShadow(request: AWSIoTDataUpdateThingShadowRequest): AWSTask<AWSIoTDataUpdateThingShadowResponse>;

	updateThingShadowCompletionHandler(request: AWSIoTDataUpdateThingShadowRequest, completionHandler: (p1: AWSIoTDataUpdateThingShadowResponse, p2: NSError) => void): void;
}

declare class AWSIoTDataDeleteThingShadowRequest extends AWSRequest {

	static alloc(): AWSIoTDataDeleteThingShadowRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDataDeleteThingShadowRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDataDeleteThingShadowRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDataDeleteThingShadowRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDataDeleteThingShadowRequest; // inherited from NSObject

	thingName: string;
}

declare class AWSIoTDataDeleteThingShadowResponse extends AWSModel {

	static alloc(): AWSIoTDataDeleteThingShadowResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDataDeleteThingShadowResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDataDeleteThingShadowResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDataDeleteThingShadowResponse; // inherited from AWSMTLModel

	static new(): AWSIoTDataDeleteThingShadowResponse; // inherited from NSObject

	payload: any;
}

declare var AWSIoTDataErrorDomain: string;

declare const enum AWSIoTDataErrorType {

	Unknown = 0,

	Conflict = 1,

	InternalFailure = 2,

	InvalidRequest = 3,

	MethodNotAllowed = 4,

	RequestEntityTooLarge = 5,

	ResourceNotFound = 6,

	ServiceUnavailable = 7,

	Throttling = 8,

	Unauthorized = 9,

	UnsupportedDocumentEncoding = 10
}

declare class AWSIoTDataGetThingShadowRequest extends AWSRequest {

	static alloc(): AWSIoTDataGetThingShadowRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDataGetThingShadowRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDataGetThingShadowRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDataGetThingShadowRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDataGetThingShadowRequest; // inherited from NSObject

	thingName: string;
}

declare class AWSIoTDataGetThingShadowResponse extends AWSModel {

	static alloc(): AWSIoTDataGetThingShadowResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDataGetThingShadowResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDataGetThingShadowResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDataGetThingShadowResponse; // inherited from AWSMTLModel

	static new(): AWSIoTDataGetThingShadowResponse; // inherited from NSObject

	payload: any;
}

declare class AWSIoTDataManager extends AWSService {

	static IoTDataManagerForKey(key: string): AWSIoTDataManager;

	static alloc(): AWSIoTDataManager; // inherited from NSObject

	static defaultIoTDataManager(): AWSIoTDataManager;

	static new(): AWSIoTDataManager; // inherited from NSObject

	static registerIoTDataManagerWithConfigurationForKey(configuration: AWSServiceConfiguration, key: string): void;

	static registerIoTDataManagerWithConfigurationWithMQTTConfigurationForKey(configuration: AWSServiceConfiguration, mqttConfig: AWSIoTMQTTConfiguration, key: string): void;

	static removeIoTDataManagerForKey(key: string): void;

	readonly configuration: AWSServiceConfiguration;

	readonly mqttConfiguration: AWSIoTMQTTConfiguration;

	connectUsingWebSocketWithClientIdCleanSessionStatusCallback(clientId: string, cleanSession: boolean, callback: (p1: AWSIoTMQTTStatus) => void): boolean;

	connectWithClientIdCleanSessionCertificateIdStatusCallback(clientId: string, cleanSession: boolean, certificateId: string, callback: (p1: AWSIoTMQTTStatus) => void): boolean;

	deleteShadow(name: string): boolean;

	deleteShadowClientToken(name: string, clientToken: string): boolean;

	disconnect(): void;

	enableMetricsCollection(enabled: boolean): void;

	getConnectionStatus(): AWSIoTMQTTStatus;

	getShadow(name: string): boolean;

	getShadowClientToken(name: string, clientToken: string): boolean;

	publishDataOnTopicQoS(data: NSData, topic: string, qos: AWSIoTMQTTQoS): boolean;

	publishDataOnTopicQoSAckCallback(data: NSData, topic: string, qos: AWSIoTMQTTQoS, ackCallback: () => void): boolean;

	publishStringOnTopicQoS(string: string, topic: string, qos: AWSIoTMQTTQoS): boolean;

	publishStringOnTopicQoSAckCallback(string: string, topic: string, qos: AWSIoTMQTTQoS, ackCallback: () => void): boolean;

	registerWithShadowOptionsEventCallback(name: string, options: NSDictionary<string, number>, callback: (p1: string, p2: AWSIoTShadowOperationType, p3: AWSIoTShadowOperationStatusType, p4: string, p5: NSData) => void): boolean;

	subscribeToTopicQoSExtendedCallback(topic: string, qos: AWSIoTMQTTQoS, callback: (p1: NSObject, p2: string, p3: NSData) => void): boolean;

	subscribeToTopicQoSExtendedCallbackAckCallback(topic: string, qos: AWSIoTMQTTQoS, callback: (p1: NSObject, p2: string, p3: NSData) => void, ackCallback: () => void): boolean;

	subscribeToTopicQoSMessageCallback(topic: string, qos: AWSIoTMQTTQoS, callback: (p1: NSData) => void): boolean;

	subscribeToTopicQoSMessageCallbackAckCallback(topic: string, qos: AWSIoTMQTTQoS, callback: (p1: NSData) => void, ackCallback: () => void): boolean;

	unregisterFromShadow(name: string): boolean;

	unsubscribeTopic(topic: string): void;

	updateShadowJsonString(name: string, jsonString: string): boolean;

	updateShadowJsonStringClientToken(name: string, jsonString: string, clientToken: string): boolean;
}

declare class AWSIoTDataPublishRequest extends AWSRequest {

	static alloc(): AWSIoTDataPublishRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDataPublishRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDataPublishRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDataPublishRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDataPublishRequest; // inherited from NSObject

	payload: any;

	qos: number;

	topic: string;
}

declare class AWSIoTDataResources extends NSObject {

	static alloc(): AWSIoTDataResources; // inherited from NSObject

	static new(): AWSIoTDataResources; // inherited from NSObject

	static sharedInstance(): AWSIoTDataResources;

	JSONObject(): NSDictionary<any, any>;
}

declare class AWSIoTDataUpdateThingShadowRequest extends AWSRequest {

	static alloc(): AWSIoTDataUpdateThingShadowRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDataUpdateThingShadowRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDataUpdateThingShadowRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDataUpdateThingShadowRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDataUpdateThingShadowRequest; // inherited from NSObject

	payload: any;

	thingName: string;
}

declare class AWSIoTDataUpdateThingShadowResponse extends AWSModel {

	static alloc(): AWSIoTDataUpdateThingShadowResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDataUpdateThingShadowResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDataUpdateThingShadowResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDataUpdateThingShadowResponse; // inherited from AWSMTLModel

	static new(): AWSIoTDataUpdateThingShadowResponse; // inherited from NSObject

	payload: any;
}

declare var AWSIoTDataVersionNumber: number;

declare var AWSIoTDataVersionString: interop.Reference<number>;

declare class AWSIoTDeleteCACertificateRequest extends AWSRequest {

	static alloc(): AWSIoTDeleteCACertificateRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteCACertificateRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteCACertificateRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDeleteCACertificateRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDeleteCACertificateRequest; // inherited from NSObject

	certificateId: string;
}

declare class AWSIoTDeleteCACertificateResponse extends AWSModel {

	static alloc(): AWSIoTDeleteCACertificateResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteCACertificateResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteCACertificateResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDeleteCACertificateResponse; // inherited from AWSMTLModel

	static new(): AWSIoTDeleteCACertificateResponse; // inherited from NSObject
}

declare class AWSIoTDeleteCertificateRequest extends AWSRequest {

	static alloc(): AWSIoTDeleteCertificateRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteCertificateRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteCertificateRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDeleteCertificateRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDeleteCertificateRequest; // inherited from NSObject

	certificateId: string;
}

declare class AWSIoTDeletePolicyRequest extends AWSRequest {

	static alloc(): AWSIoTDeletePolicyRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDeletePolicyRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDeletePolicyRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDeletePolicyRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDeletePolicyRequest; // inherited from NSObject

	policyName: string;
}

declare class AWSIoTDeletePolicyVersionRequest extends AWSRequest {

	static alloc(): AWSIoTDeletePolicyVersionRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDeletePolicyVersionRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDeletePolicyVersionRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDeletePolicyVersionRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDeletePolicyVersionRequest; // inherited from NSObject

	policyName: string;

	policyVersionId: string;
}

declare class AWSIoTDeleteRegistrationCodeRequest extends AWSRequest {

	static alloc(): AWSIoTDeleteRegistrationCodeRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteRegistrationCodeRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteRegistrationCodeRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDeleteRegistrationCodeRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDeleteRegistrationCodeRequest; // inherited from NSObject
}

declare class AWSIoTDeleteRegistrationCodeResponse extends AWSModel {

	static alloc(): AWSIoTDeleteRegistrationCodeResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteRegistrationCodeResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteRegistrationCodeResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDeleteRegistrationCodeResponse; // inherited from AWSMTLModel

	static new(): AWSIoTDeleteRegistrationCodeResponse; // inherited from NSObject
}

declare class AWSIoTDeleteThingRequest extends AWSRequest {

	static alloc(): AWSIoTDeleteThingRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteThingRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteThingRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDeleteThingRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDeleteThingRequest; // inherited from NSObject

	expectedVersion: number;

	thingName: string;
}

declare class AWSIoTDeleteThingResponse extends AWSModel {

	static alloc(): AWSIoTDeleteThingResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteThingResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteThingResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDeleteThingResponse; // inherited from AWSMTLModel

	static new(): AWSIoTDeleteThingResponse; // inherited from NSObject
}

declare class AWSIoTDeleteThingTypeRequest extends AWSRequest {

	static alloc(): AWSIoTDeleteThingTypeRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteThingTypeRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteThingTypeRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDeleteThingTypeRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDeleteThingTypeRequest; // inherited from NSObject

	thingTypeName: string;
}

declare class AWSIoTDeleteThingTypeResponse extends AWSModel {

	static alloc(): AWSIoTDeleteThingTypeResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteThingTypeResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteThingTypeResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDeleteThingTypeResponse; // inherited from AWSMTLModel

	static new(): AWSIoTDeleteThingTypeResponse; // inherited from NSObject
}

declare class AWSIoTDeleteTopicRuleRequest extends AWSRequest {

	static alloc(): AWSIoTDeleteTopicRuleRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteTopicRuleRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDeleteTopicRuleRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDeleteTopicRuleRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDeleteTopicRuleRequest; // inherited from NSObject

	ruleName: string;
}

declare class AWSIoTDeprecateThingTypeRequest extends AWSRequest {

	static alloc(): AWSIoTDeprecateThingTypeRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDeprecateThingTypeRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDeprecateThingTypeRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDeprecateThingTypeRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDeprecateThingTypeRequest; // inherited from NSObject

	thingTypeName: string;

	undoDeprecate: number;
}

declare class AWSIoTDeprecateThingTypeResponse extends AWSModel {

	static alloc(): AWSIoTDeprecateThingTypeResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDeprecateThingTypeResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDeprecateThingTypeResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDeprecateThingTypeResponse; // inherited from AWSMTLModel

	static new(): AWSIoTDeprecateThingTypeResponse; // inherited from NSObject
}

declare class AWSIoTDescribeCACertificateRequest extends AWSRequest {

	static alloc(): AWSIoTDescribeCACertificateRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeCACertificateRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeCACertificateRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDescribeCACertificateRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDescribeCACertificateRequest; // inherited from NSObject

	certificateId: string;
}

declare class AWSIoTDescribeCACertificateResponse extends AWSModel {

	static alloc(): AWSIoTDescribeCACertificateResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeCACertificateResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeCACertificateResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDescribeCACertificateResponse; // inherited from AWSMTLModel

	static new(): AWSIoTDescribeCACertificateResponse; // inherited from NSObject

	certificateDescription: AWSIoTCACertificateDescription;
}

declare class AWSIoTDescribeCertificateRequest extends AWSRequest {

	static alloc(): AWSIoTDescribeCertificateRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeCertificateRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeCertificateRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDescribeCertificateRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDescribeCertificateRequest; // inherited from NSObject

	certificateId: string;
}

declare class AWSIoTDescribeCertificateResponse extends AWSModel {

	static alloc(): AWSIoTDescribeCertificateResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeCertificateResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeCertificateResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDescribeCertificateResponse; // inherited from AWSMTLModel

	static new(): AWSIoTDescribeCertificateResponse; // inherited from NSObject

	certificateDescription: AWSIoTCertificateDescription;
}

declare class AWSIoTDescribeEndpointRequest extends AWSRequest {

	static alloc(): AWSIoTDescribeEndpointRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeEndpointRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeEndpointRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDescribeEndpointRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDescribeEndpointRequest; // inherited from NSObject
}

declare class AWSIoTDescribeEndpointResponse extends AWSModel {

	static alloc(): AWSIoTDescribeEndpointResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeEndpointResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeEndpointResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDescribeEndpointResponse; // inherited from AWSMTLModel

	static new(): AWSIoTDescribeEndpointResponse; // inherited from NSObject

	endpointAddress: string;
}

declare class AWSIoTDescribeThingRequest extends AWSRequest {

	static alloc(): AWSIoTDescribeThingRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeThingRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeThingRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDescribeThingRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDescribeThingRequest; // inherited from NSObject

	thingName: string;
}

declare class AWSIoTDescribeThingResponse extends AWSModel {

	static alloc(): AWSIoTDescribeThingResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeThingResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeThingResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDescribeThingResponse; // inherited from AWSMTLModel

	static new(): AWSIoTDescribeThingResponse; // inherited from NSObject

	attributes: NSDictionary<string, string>;

	defaultClientId: string;

	thingName: string;

	thingTypeName: string;

	version: number;
}

declare class AWSIoTDescribeThingTypeRequest extends AWSRequest {

	static alloc(): AWSIoTDescribeThingTypeRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeThingTypeRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeThingTypeRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDescribeThingTypeRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDescribeThingTypeRequest; // inherited from NSObject

	thingTypeName: string;
}

declare class AWSIoTDescribeThingTypeResponse extends AWSModel {

	static alloc(): AWSIoTDescribeThingTypeResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeThingTypeResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDescribeThingTypeResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDescribeThingTypeResponse; // inherited from AWSMTLModel

	static new(): AWSIoTDescribeThingTypeResponse; // inherited from NSObject

	thingTypeMetadata: AWSIoTThingTypeMetadata;

	thingTypeName: string;

	thingTypeProperties: AWSIoTThingTypeProperties;
}

declare class AWSIoTDetachPrincipalPolicyRequest extends AWSRequest {

	static alloc(): AWSIoTDetachPrincipalPolicyRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDetachPrincipalPolicyRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDetachPrincipalPolicyRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDetachPrincipalPolicyRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDetachPrincipalPolicyRequest; // inherited from NSObject

	policyName: string;

	principal: string;
}

declare class AWSIoTDetachThingPrincipalRequest extends AWSRequest {

	static alloc(): AWSIoTDetachThingPrincipalRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDetachThingPrincipalRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDetachThingPrincipalRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDetachThingPrincipalRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDetachThingPrincipalRequest; // inherited from NSObject

	principal: string;

	thingName: string;
}

declare class AWSIoTDetachThingPrincipalResponse extends AWSModel {

	static alloc(): AWSIoTDetachThingPrincipalResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDetachThingPrincipalResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDetachThingPrincipalResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDetachThingPrincipalResponse; // inherited from AWSMTLModel

	static new(): AWSIoTDetachThingPrincipalResponse; // inherited from NSObject
}

declare class AWSIoTDisableTopicRuleRequest extends AWSRequest {

	static alloc(): AWSIoTDisableTopicRuleRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDisableTopicRuleRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDisableTopicRuleRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDisableTopicRuleRequest; // inherited from AWSMTLModel

	static new(): AWSIoTDisableTopicRuleRequest; // inherited from NSObject

	ruleName: string;
}

declare class AWSIoTDynamoDBAction extends AWSModel {

	static alloc(): AWSIoTDynamoDBAction; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDynamoDBAction; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDynamoDBAction; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDynamoDBAction; // inherited from AWSMTLModel

	static new(): AWSIoTDynamoDBAction; // inherited from NSObject

	hashKeyField: string;

	hashKeyType: AWSIoTDynamoKeyType;

	hashKeyValue: string;

	operation: string;

	payloadField: string;

	rangeKeyField: string;

	rangeKeyType: AWSIoTDynamoKeyType;

	rangeKeyValue: string;

	roleArn: string;

	tableName: string;
}

declare class AWSIoTDynamoDBv2Action extends AWSModel {

	static alloc(): AWSIoTDynamoDBv2Action; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTDynamoDBv2Action; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTDynamoDBv2Action; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTDynamoDBv2Action; // inherited from AWSMTLModel

	static new(): AWSIoTDynamoDBv2Action; // inherited from NSObject

	putItem: AWSIoTPutItemInput;

	roleArn: string;
}

declare const enum AWSIoTDynamoKeyType {

	Unknown = 0,

	String = 1,

	Number = 2
}

declare class AWSIoTElasticsearchAction extends AWSModel {

	static alloc(): AWSIoTElasticsearchAction; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTElasticsearchAction; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTElasticsearchAction; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTElasticsearchAction; // inherited from AWSMTLModel

	static new(): AWSIoTElasticsearchAction; // inherited from NSObject

	endpoint: string;

	identifier: string;

	index: string;

	roleArn: string;

	types: string;
}

declare class AWSIoTEnableTopicRuleRequest extends AWSRequest {

	static alloc(): AWSIoTEnableTopicRuleRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTEnableTopicRuleRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTEnableTopicRuleRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTEnableTopicRuleRequest; // inherited from AWSMTLModel

	static new(): AWSIoTEnableTopicRuleRequest; // inherited from NSObject

	ruleName: string;
}

declare var AWSIoTErrorDomain: string;

declare const enum AWSIoTErrorType {

	Unknown = 0,

	CertificateConflict = 1,

	CertificateState = 2,

	CertificateValidation = 3,

	DeleteConflict = 4,

	Internal = 5,

	InternalFailure = 6,

	InvalidRequest = 7,

	LimitExceeded = 8,

	MalformedPolicy = 9,

	RegistrationCodeValidation = 10,

	ResourceAlreadyExists = 11,

	ResourceNotFound = 12,

	ServiceUnavailable = 13,

	SqlParse = 14,

	Throttling = 15,

	TransferAlreadyCompleted = 16,

	TransferConflict = 17,

	Unauthorized = 18,

	VersionConflict = 19,

	VersionsLimitExceeded = 20
}

declare class AWSIoTFirehoseAction extends AWSModel {

	static alloc(): AWSIoTFirehoseAction; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTFirehoseAction; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTFirehoseAction; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTFirehoseAction; // inherited from AWSMTLModel

	static new(): AWSIoTFirehoseAction; // inherited from NSObject

	deliveryStreamName: string;

	roleArn: string;

	separator: string;
}

declare class AWSIoTGetLoggingOptionsRequest extends AWSRequest {

	static alloc(): AWSIoTGetLoggingOptionsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTGetLoggingOptionsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTGetLoggingOptionsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTGetLoggingOptionsRequest; // inherited from AWSMTLModel

	static new(): AWSIoTGetLoggingOptionsRequest; // inherited from NSObject
}

declare class AWSIoTGetLoggingOptionsResponse extends AWSModel {

	static alloc(): AWSIoTGetLoggingOptionsResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTGetLoggingOptionsResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTGetLoggingOptionsResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTGetLoggingOptionsResponse; // inherited from AWSMTLModel

	static new(): AWSIoTGetLoggingOptionsResponse; // inherited from NSObject

	logLevel: AWSIoTLogLevel;

	roleArn: string;
}

declare class AWSIoTGetPolicyRequest extends AWSRequest {

	static alloc(): AWSIoTGetPolicyRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTGetPolicyRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTGetPolicyRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTGetPolicyRequest; // inherited from AWSMTLModel

	static new(): AWSIoTGetPolicyRequest; // inherited from NSObject

	policyName: string;
}

declare class AWSIoTGetPolicyResponse extends AWSModel {

	static alloc(): AWSIoTGetPolicyResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTGetPolicyResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTGetPolicyResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTGetPolicyResponse; // inherited from AWSMTLModel

	static new(): AWSIoTGetPolicyResponse; // inherited from NSObject

	defaultVersionId: string;

	policyArn: string;

	policyDocument: string;

	policyName: string;
}

declare class AWSIoTGetPolicyVersionRequest extends AWSRequest {

	static alloc(): AWSIoTGetPolicyVersionRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTGetPolicyVersionRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTGetPolicyVersionRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTGetPolicyVersionRequest; // inherited from AWSMTLModel

	static new(): AWSIoTGetPolicyVersionRequest; // inherited from NSObject

	policyName: string;

	policyVersionId: string;
}

declare class AWSIoTGetPolicyVersionResponse extends AWSModel {

	static alloc(): AWSIoTGetPolicyVersionResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTGetPolicyVersionResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTGetPolicyVersionResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTGetPolicyVersionResponse; // inherited from AWSMTLModel

	static new(): AWSIoTGetPolicyVersionResponse; // inherited from NSObject

	isDefaultVersion: number;

	policyArn: string;

	policyDocument: string;

	policyName: string;

	policyVersionId: string;
}

declare class AWSIoTGetRegistrationCodeRequest extends AWSRequest {

	static alloc(): AWSIoTGetRegistrationCodeRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTGetRegistrationCodeRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTGetRegistrationCodeRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTGetRegistrationCodeRequest; // inherited from AWSMTLModel

	static new(): AWSIoTGetRegistrationCodeRequest; // inherited from NSObject
}

declare class AWSIoTGetRegistrationCodeResponse extends AWSModel {

	static alloc(): AWSIoTGetRegistrationCodeResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTGetRegistrationCodeResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTGetRegistrationCodeResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTGetRegistrationCodeResponse; // inherited from AWSMTLModel

	static new(): AWSIoTGetRegistrationCodeResponse; // inherited from NSObject

	registrationCode: string;
}

declare class AWSIoTGetTopicRuleRequest extends AWSRequest {

	static alloc(): AWSIoTGetTopicRuleRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTGetTopicRuleRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTGetTopicRuleRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTGetTopicRuleRequest; // inherited from AWSMTLModel

	static new(): AWSIoTGetTopicRuleRequest; // inherited from NSObject

	ruleName: string;
}

declare class AWSIoTGetTopicRuleResponse extends AWSModel {

	static alloc(): AWSIoTGetTopicRuleResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTGetTopicRuleResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTGetTopicRuleResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTGetTopicRuleResponse; // inherited from AWSMTLModel

	static new(): AWSIoTGetTopicRuleResponse; // inherited from NSObject

	rule: AWSIoTTopicRule;

	ruleArn: string;
}

declare class AWSIoTKeyPair extends AWSModel {

	static alloc(): AWSIoTKeyPair; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTKeyPair; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTKeyPair; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTKeyPair; // inherited from AWSMTLModel

	static new(): AWSIoTKeyPair; // inherited from NSObject

	privateKey: string;

	publicKey: string;
}

declare class AWSIoTKinesisAction extends AWSModel {

	static alloc(): AWSIoTKinesisAction; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTKinesisAction; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTKinesisAction; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTKinesisAction; // inherited from AWSMTLModel

	static new(): AWSIoTKinesisAction; // inherited from NSObject

	partitionKey: string;

	roleArn: string;

	streamName: string;
}

declare class AWSIoTLambdaAction extends AWSModel {

	static alloc(): AWSIoTLambdaAction; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTLambdaAction; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTLambdaAction; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTLambdaAction; // inherited from AWSMTLModel

	static new(): AWSIoTLambdaAction; // inherited from NSObject

	functionArn: string;
}

declare class AWSIoTListCACertificatesRequest extends AWSRequest {

	static alloc(): AWSIoTListCACertificatesRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListCACertificatesRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListCACertificatesRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListCACertificatesRequest; // inherited from AWSMTLModel

	static new(): AWSIoTListCACertificatesRequest; // inherited from NSObject

	ascendingOrder: number;

	marker: string;

	pageSize: number;
}

declare class AWSIoTListCACertificatesResponse extends AWSModel {

	static alloc(): AWSIoTListCACertificatesResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListCACertificatesResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListCACertificatesResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListCACertificatesResponse; // inherited from AWSMTLModel

	static new(): AWSIoTListCACertificatesResponse; // inherited from NSObject

	certificates: NSArray<AWSIoTCACertificate>;

	nextMarker: string;
}

declare class AWSIoTListCertificatesByCARequest extends AWSRequest {

	static alloc(): AWSIoTListCertificatesByCARequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListCertificatesByCARequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListCertificatesByCARequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListCertificatesByCARequest; // inherited from AWSMTLModel

	static new(): AWSIoTListCertificatesByCARequest; // inherited from NSObject

	ascendingOrder: number;

	caCertificateId: string;

	marker: string;

	pageSize: number;
}

declare class AWSIoTListCertificatesByCAResponse extends AWSModel {

	static alloc(): AWSIoTListCertificatesByCAResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListCertificatesByCAResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListCertificatesByCAResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListCertificatesByCAResponse; // inherited from AWSMTLModel

	static new(): AWSIoTListCertificatesByCAResponse; // inherited from NSObject

	certificates: NSArray<AWSIoTCertificate>;

	nextMarker: string;
}

declare class AWSIoTListCertificatesRequest extends AWSRequest {

	static alloc(): AWSIoTListCertificatesRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListCertificatesRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListCertificatesRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListCertificatesRequest; // inherited from AWSMTLModel

	static new(): AWSIoTListCertificatesRequest; // inherited from NSObject

	ascendingOrder: number;

	marker: string;

	pageSize: number;
}

declare class AWSIoTListCertificatesResponse extends AWSModel {

	static alloc(): AWSIoTListCertificatesResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListCertificatesResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListCertificatesResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListCertificatesResponse; // inherited from AWSMTLModel

	static new(): AWSIoTListCertificatesResponse; // inherited from NSObject

	certificates: NSArray<AWSIoTCertificate>;

	nextMarker: string;
}

declare class AWSIoTListOutgoingCertificatesRequest extends AWSRequest {

	static alloc(): AWSIoTListOutgoingCertificatesRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListOutgoingCertificatesRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListOutgoingCertificatesRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListOutgoingCertificatesRequest; // inherited from AWSMTLModel

	static new(): AWSIoTListOutgoingCertificatesRequest; // inherited from NSObject

	ascendingOrder: number;

	marker: string;

	pageSize: number;
}

declare class AWSIoTListOutgoingCertificatesResponse extends AWSModel {

	static alloc(): AWSIoTListOutgoingCertificatesResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListOutgoingCertificatesResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListOutgoingCertificatesResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListOutgoingCertificatesResponse; // inherited from AWSMTLModel

	static new(): AWSIoTListOutgoingCertificatesResponse; // inherited from NSObject

	nextMarker: string;

	outgoingCertificates: NSArray<AWSIoTOutgoingCertificate>;
}

declare class AWSIoTListPoliciesRequest extends AWSRequest {

	static alloc(): AWSIoTListPoliciesRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListPoliciesRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListPoliciesRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListPoliciesRequest; // inherited from AWSMTLModel

	static new(): AWSIoTListPoliciesRequest; // inherited from NSObject

	ascendingOrder: number;

	marker: string;

	pageSize: number;
}

declare class AWSIoTListPoliciesResponse extends AWSModel {

	static alloc(): AWSIoTListPoliciesResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListPoliciesResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListPoliciesResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListPoliciesResponse; // inherited from AWSMTLModel

	static new(): AWSIoTListPoliciesResponse; // inherited from NSObject

	nextMarker: string;

	policies: NSArray<AWSIoTPolicy>;
}

declare class AWSIoTListPolicyPrincipalsRequest extends AWSRequest {

	static alloc(): AWSIoTListPolicyPrincipalsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListPolicyPrincipalsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListPolicyPrincipalsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListPolicyPrincipalsRequest; // inherited from AWSMTLModel

	static new(): AWSIoTListPolicyPrincipalsRequest; // inherited from NSObject

	ascendingOrder: number;

	marker: string;

	pageSize: number;

	policyName: string;
}

declare class AWSIoTListPolicyPrincipalsResponse extends AWSModel {

	static alloc(): AWSIoTListPolicyPrincipalsResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListPolicyPrincipalsResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListPolicyPrincipalsResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListPolicyPrincipalsResponse; // inherited from AWSMTLModel

	static new(): AWSIoTListPolicyPrincipalsResponse; // inherited from NSObject

	nextMarker: string;

	principals: NSArray<string>;
}

declare class AWSIoTListPolicyVersionsRequest extends AWSRequest {

	static alloc(): AWSIoTListPolicyVersionsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListPolicyVersionsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListPolicyVersionsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListPolicyVersionsRequest; // inherited from AWSMTLModel

	static new(): AWSIoTListPolicyVersionsRequest; // inherited from NSObject

	policyName: string;
}

declare class AWSIoTListPolicyVersionsResponse extends AWSModel {

	static alloc(): AWSIoTListPolicyVersionsResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListPolicyVersionsResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListPolicyVersionsResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListPolicyVersionsResponse; // inherited from AWSMTLModel

	static new(): AWSIoTListPolicyVersionsResponse; // inherited from NSObject

	policyVersions: NSArray<AWSIoTPolicyVersion>;
}

declare class AWSIoTListPrincipalPoliciesRequest extends AWSRequest {

	static alloc(): AWSIoTListPrincipalPoliciesRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListPrincipalPoliciesRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListPrincipalPoliciesRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListPrincipalPoliciesRequest; // inherited from AWSMTLModel

	static new(): AWSIoTListPrincipalPoliciesRequest; // inherited from NSObject

	ascendingOrder: number;

	marker: string;

	pageSize: number;

	principal: string;
}

declare class AWSIoTListPrincipalPoliciesResponse extends AWSModel {

	static alloc(): AWSIoTListPrincipalPoliciesResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListPrincipalPoliciesResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListPrincipalPoliciesResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListPrincipalPoliciesResponse; // inherited from AWSMTLModel

	static new(): AWSIoTListPrincipalPoliciesResponse; // inherited from NSObject

	nextMarker: string;

	policies: NSArray<AWSIoTPolicy>;
}

declare class AWSIoTListPrincipalThingsRequest extends AWSRequest {

	static alloc(): AWSIoTListPrincipalThingsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListPrincipalThingsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListPrincipalThingsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListPrincipalThingsRequest; // inherited from AWSMTLModel

	static new(): AWSIoTListPrincipalThingsRequest; // inherited from NSObject

	maxResults: number;

	nextToken: string;

	principal: string;
}

declare class AWSIoTListPrincipalThingsResponse extends AWSModel {

	static alloc(): AWSIoTListPrincipalThingsResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListPrincipalThingsResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListPrincipalThingsResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListPrincipalThingsResponse; // inherited from AWSMTLModel

	static new(): AWSIoTListPrincipalThingsResponse; // inherited from NSObject

	nextToken: string;

	things: NSArray<string>;
}

declare class AWSIoTListThingPrincipalsRequest extends AWSRequest {

	static alloc(): AWSIoTListThingPrincipalsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListThingPrincipalsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListThingPrincipalsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListThingPrincipalsRequest; // inherited from AWSMTLModel

	static new(): AWSIoTListThingPrincipalsRequest; // inherited from NSObject

	thingName: string;
}

declare class AWSIoTListThingPrincipalsResponse extends AWSModel {

	static alloc(): AWSIoTListThingPrincipalsResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListThingPrincipalsResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListThingPrincipalsResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListThingPrincipalsResponse; // inherited from AWSMTLModel

	static new(): AWSIoTListThingPrincipalsResponse; // inherited from NSObject

	principals: NSArray<string>;
}

declare class AWSIoTListThingTypesRequest extends AWSRequest {

	static alloc(): AWSIoTListThingTypesRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListThingTypesRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListThingTypesRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListThingTypesRequest; // inherited from AWSMTLModel

	static new(): AWSIoTListThingTypesRequest; // inherited from NSObject

	maxResults: number;

	nextToken: string;

	thingTypeName: string;
}

declare class AWSIoTListThingTypesResponse extends AWSModel {

	static alloc(): AWSIoTListThingTypesResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListThingTypesResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListThingTypesResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListThingTypesResponse; // inherited from AWSMTLModel

	static new(): AWSIoTListThingTypesResponse; // inherited from NSObject

	nextToken: string;

	thingTypes: NSArray<AWSIoTThingTypeDefinition>;
}

declare class AWSIoTListThingsRequest extends AWSRequest {

	static alloc(): AWSIoTListThingsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListThingsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListThingsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListThingsRequest; // inherited from AWSMTLModel

	static new(): AWSIoTListThingsRequest; // inherited from NSObject

	attributeName: string;

	attributeValue: string;

	maxResults: number;

	nextToken: string;

	thingTypeName: string;
}

declare class AWSIoTListThingsResponse extends AWSModel {

	static alloc(): AWSIoTListThingsResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListThingsResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListThingsResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListThingsResponse; // inherited from AWSMTLModel

	static new(): AWSIoTListThingsResponse; // inherited from NSObject

	nextToken: string;

	things: NSArray<AWSIoTThingAttribute>;
}

declare class AWSIoTListTopicRulesRequest extends AWSRequest {

	static alloc(): AWSIoTListTopicRulesRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListTopicRulesRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListTopicRulesRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListTopicRulesRequest; // inherited from AWSMTLModel

	static new(): AWSIoTListTopicRulesRequest; // inherited from NSObject

	maxResults: number;

	nextToken: string;

	ruleDisabled: number;

	topic: string;
}

declare class AWSIoTListTopicRulesResponse extends AWSModel {

	static alloc(): AWSIoTListTopicRulesResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTListTopicRulesResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTListTopicRulesResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTListTopicRulesResponse; // inherited from AWSMTLModel

	static new(): AWSIoTListTopicRulesResponse; // inherited from NSObject

	nextToken: string;

	rules: NSArray<AWSIoTTopicRuleListItem>;
}

declare const enum AWSIoTLogLevel {

	Unknown = 0,

	Debug = 1,

	Info = 2,

	Error = 3,

	Warn = 4,

	Disabled = 5
}

declare class AWSIoTLoggingOptionsPayload extends AWSModel {

	static alloc(): AWSIoTLoggingOptionsPayload; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTLoggingOptionsPayload; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTLoggingOptionsPayload; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTLoggingOptionsPayload; // inherited from AWSMTLModel

	static new(): AWSIoTLoggingOptionsPayload; // inherited from NSObject

	logLevel: AWSIoTLogLevel;

	roleArn: string;
}

declare class AWSIoTMQTTConfiguration extends NSObject {

	static alloc(): AWSIoTMQTTConfiguration; // inherited from NSObject

	static new(): AWSIoTMQTTConfiguration; // inherited from NSObject

	readonly autoResubscribe: boolean;

	readonly baseReconnectTimeInterval: number;

	readonly keepAliveTimeInterval: number;

	readonly lastWillAndTestament: AWSIoTMQTTLastWillAndTestament;

	readonly maximumReconnectTimeInterval: number;

	readonly minimumConnectionTimeInterval: number;

	readonly publishRetryThrottle: number;

	readonly runLoop: NSRunLoop;

	readonly runLoopMode: string;

	constructor(o: { keepAliveTimeInterval: number; baseReconnectTimeInterval: number; minimumConnectionTimeInterval: number; maximumReconnectTimeInterval: number; runLoop: NSRunLoop; runLoopMode: string; autoResubscribe: boolean; lastWillAndTestament: AWSIoTMQTTLastWillAndTestament; });

	constructor(o: { keepAliveTimeInterval: number; baseReconnectTimeInterval: number; minimumConnectionTimeInterval: number; maximumReconnectTimeInterval: number; runLoop: NSRunLoop; runLoopMode: string; autoResubscribe: boolean; lastWillAndTestament: AWSIoTMQTTLastWillAndTestament; publishRetryThrottle: number; });

	initWithKeepAliveTimeIntervalBaseReconnectTimeIntervalMinimumConnectionTimeIntervalMaximumReconnectTimeIntervalRunLoopRunLoopModeAutoResubscribeLastWillAndTestament(kat: number, brt: number, mct: number, mrt: number, rlp: NSRunLoop, rlm: string, ars: boolean, lwt: AWSIoTMQTTLastWillAndTestament): this;

	initWithKeepAliveTimeIntervalBaseReconnectTimeIntervalMinimumConnectionTimeIntervalMaximumReconnectTimeIntervalRunLoopRunLoopModeAutoResubscribeLastWillAndTestamentPublishRetryThrottle(kat: number, brt: number, mct: number, mrt: number, rlp: NSRunLoop, rlm: string, ars: boolean, lwt: AWSIoTMQTTLastWillAndTestament, prt: number): this;
}

declare class AWSIoTMQTTLastWillAndTestament extends NSObject {

	static alloc(): AWSIoTMQTTLastWillAndTestament; // inherited from NSObject

	static new(): AWSIoTMQTTLastWillAndTestament; // inherited from NSObject

	message: string;

	qos: AWSIoTMQTTQoS;

	topic: string;
}

declare const enum AWSIoTMQTTQoS {

	MessageDeliveryAttemptedAtMostOnce = 0,

	MessageDeliveryAttemptedAtLeastOnce = 1
}

declare const enum AWSIoTMQTTStatus {

	Unknown = 0,

	Connecting = 1,

	Connected = 2,

	Disconnected = 3,

	ConnectionRefused = 4,

	ConnectionError = 5,

	ProtocolError = 6
}

declare class AWSIoTManager extends AWSService {

	static IoTManagerForKey(key: string): AWSIoTManager;

	static alloc(): AWSIoTManager; // inherited from NSObject

	static defaultIoTManager(): AWSIoTManager;

	static deleteCertificate(): boolean;

	static importIdentityFromPKCS12DataPassPhraseCertificateId(pkcs12Data: NSData, passPhrase: string, certificateId: string): boolean;

	static isValidCertificate(certificateId: string): boolean;

	static new(): AWSIoTManager; // inherited from NSObject

	static registerIoTManagerWithConfigurationForKey(configuration: AWSServiceConfiguration, key: string): void;

	static removeIoTManagerForKey(key: string): void;

	readonly configuration: AWSServiceConfiguration;

	createKeysAndCertificateFromCsrCallback(csrDictionary: NSDictionary<string, string>, callback: (p1: AWSIoTCreateCertificateResponse) => void): void;
}

declare const enum AWSIoTMessageFormat {

	Unknown = 0,

	RAW = 1,

	Json = 2
}

declare class AWSIoTOutgoingCertificate extends AWSModel {

	static alloc(): AWSIoTOutgoingCertificate; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTOutgoingCertificate; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTOutgoingCertificate; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTOutgoingCertificate; // inherited from AWSMTLModel

	static new(): AWSIoTOutgoingCertificate; // inherited from NSObject

	certificateArn: string;

	certificateId: string;

	creationDate: Date;

	transferDate: Date;

	transferMessage: string;

	transferredTo: string;
}

declare class AWSIoTPolicy extends AWSModel {

	static alloc(): AWSIoTPolicy; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTPolicy; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTPolicy; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTPolicy; // inherited from AWSMTLModel

	static new(): AWSIoTPolicy; // inherited from NSObject

	policyArn: string;

	policyName: string;
}

declare class AWSIoTPolicyVersion extends AWSModel {

	static alloc(): AWSIoTPolicyVersion; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTPolicyVersion; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTPolicyVersion; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTPolicyVersion; // inherited from AWSMTLModel

	static new(): AWSIoTPolicyVersion; // inherited from NSObject

	createDate: Date;

	isDefaultVersion: number;

	versionId: string;
}

declare class AWSIoTPutItemInput extends AWSModel {

	static alloc(): AWSIoTPutItemInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTPutItemInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTPutItemInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTPutItemInput; // inherited from AWSMTLModel

	static new(): AWSIoTPutItemInput; // inherited from NSObject

	tableName: string;
}

declare class AWSIoTRegisterCACertificateRequest extends AWSRequest {

	static alloc(): AWSIoTRegisterCACertificateRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTRegisterCACertificateRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTRegisterCACertificateRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTRegisterCACertificateRequest; // inherited from AWSMTLModel

	static new(): AWSIoTRegisterCACertificateRequest; // inherited from NSObject

	allowAutoRegistration: number;

	caCertificate: string;

	setAsActive: number;

	verificationCertificate: string;
}

declare class AWSIoTRegisterCACertificateResponse extends AWSModel {

	static alloc(): AWSIoTRegisterCACertificateResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTRegisterCACertificateResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTRegisterCACertificateResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTRegisterCACertificateResponse; // inherited from AWSMTLModel

	static new(): AWSIoTRegisterCACertificateResponse; // inherited from NSObject

	certificateArn: string;

	certificateId: string;
}

declare class AWSIoTRegisterCertificateRequest extends AWSRequest {

	static alloc(): AWSIoTRegisterCertificateRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTRegisterCertificateRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTRegisterCertificateRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTRegisterCertificateRequest; // inherited from AWSMTLModel

	static new(): AWSIoTRegisterCertificateRequest; // inherited from NSObject

	caCertificatePem: string;

	certificatePem: string;

	setAsActive: number;

	status: AWSIoTCertificateStatus;
}

declare class AWSIoTRegisterCertificateResponse extends AWSModel {

	static alloc(): AWSIoTRegisterCertificateResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTRegisterCertificateResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTRegisterCertificateResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTRegisterCertificateResponse; // inherited from AWSMTLModel

	static new(): AWSIoTRegisterCertificateResponse; // inherited from NSObject

	certificateArn: string;

	certificateId: string;
}

declare class AWSIoTRejectCertificateTransferRequest extends AWSRequest {

	static alloc(): AWSIoTRejectCertificateTransferRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTRejectCertificateTransferRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTRejectCertificateTransferRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTRejectCertificateTransferRequest; // inherited from AWSMTLModel

	static new(): AWSIoTRejectCertificateTransferRequest; // inherited from NSObject

	certificateId: string;

	rejectReason: string;
}

declare class AWSIoTReplaceTopicRuleRequest extends AWSRequest {

	static alloc(): AWSIoTReplaceTopicRuleRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTReplaceTopicRuleRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTReplaceTopicRuleRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTReplaceTopicRuleRequest; // inherited from AWSMTLModel

	static new(): AWSIoTReplaceTopicRuleRequest; // inherited from NSObject

	ruleName: string;

	topicRulePayload: AWSIoTTopicRulePayload;
}

declare class AWSIoTRepublishAction extends AWSModel {

	static alloc(): AWSIoTRepublishAction; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTRepublishAction; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTRepublishAction; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTRepublishAction; // inherited from AWSMTLModel

	static new(): AWSIoTRepublishAction; // inherited from NSObject

	roleArn: string;

	topic: string;
}

declare class AWSIoTResources extends NSObject {

	static alloc(): AWSIoTResources; // inherited from NSObject

	static new(): AWSIoTResources; // inherited from NSObject

	static sharedInstance(): AWSIoTResources;

	JSONObject(): NSDictionary<any, any>;
}

declare class AWSIoTS3Action extends AWSModel {

	static alloc(): AWSIoTS3Action; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTS3Action; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTS3Action; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTS3Action; // inherited from AWSMTLModel

	static new(): AWSIoTS3Action; // inherited from NSObject

	bucketName: string;

	cannedAcl: AWSIoTCannedAccessControlList;

	key: string;

	roleArn: string;
}

declare class AWSIoTSetDefaultPolicyVersionRequest extends AWSRequest {

	static alloc(): AWSIoTSetDefaultPolicyVersionRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTSetDefaultPolicyVersionRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTSetDefaultPolicyVersionRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTSetDefaultPolicyVersionRequest; // inherited from AWSMTLModel

	static new(): AWSIoTSetDefaultPolicyVersionRequest; // inherited from NSObject

	policyName: string;

	policyVersionId: string;
}

declare class AWSIoTSetLoggingOptionsRequest extends AWSRequest {

	static alloc(): AWSIoTSetLoggingOptionsRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTSetLoggingOptionsRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTSetLoggingOptionsRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTSetLoggingOptionsRequest; // inherited from AWSMTLModel

	static new(): AWSIoTSetLoggingOptionsRequest; // inherited from NSObject

	loggingOptionsPayload: AWSIoTLoggingOptionsPayload;
}

declare const enum AWSIoTShadowOperationStatusType {

	Accepted = 0,

	Rejected = 1,

	Delta = 2,

	Documents = 3,

	Count = 4,

	ForeignUpdate = 5,

	Timeout = 6
}

declare const enum AWSIoTShadowOperationType {

	Update = 0,

	Get = 1,

	Delete = 2,

	Count = 3,

	None = 4
}

declare class AWSIoTSnsAction extends AWSModel {

	static alloc(): AWSIoTSnsAction; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTSnsAction; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTSnsAction; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTSnsAction; // inherited from AWSMTLModel

	static new(): AWSIoTSnsAction; // inherited from NSObject

	messageFormat: AWSIoTMessageFormat;

	roleArn: string;

	targetArn: string;
}

declare class AWSIoTSqsAction extends AWSModel {

	static alloc(): AWSIoTSqsAction; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTSqsAction; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTSqsAction; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTSqsAction; // inherited from AWSMTLModel

	static new(): AWSIoTSqsAction; // inherited from NSObject

	queueUrl: string;

	roleArn: string;

	useBase64: number;
}

declare class AWSIoTThingAttribute extends AWSModel {

	static alloc(): AWSIoTThingAttribute; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTThingAttribute; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTThingAttribute; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTThingAttribute; // inherited from AWSMTLModel

	static new(): AWSIoTThingAttribute; // inherited from NSObject

	attributes: NSDictionary<string, string>;

	thingName: string;

	thingTypeName: string;

	version: number;
}

declare class AWSIoTThingTypeDefinition extends AWSModel {

	static alloc(): AWSIoTThingTypeDefinition; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTThingTypeDefinition; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTThingTypeDefinition; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTThingTypeDefinition; // inherited from AWSMTLModel

	static new(): AWSIoTThingTypeDefinition; // inherited from NSObject

	thingTypeMetadata: AWSIoTThingTypeMetadata;

	thingTypeName: string;

	thingTypeProperties: AWSIoTThingTypeProperties;
}

declare class AWSIoTThingTypeMetadata extends AWSModel {

	static alloc(): AWSIoTThingTypeMetadata; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTThingTypeMetadata; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTThingTypeMetadata; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTThingTypeMetadata; // inherited from AWSMTLModel

	static new(): AWSIoTThingTypeMetadata; // inherited from NSObject

	creationDate: Date;

	deprecated: number;

	deprecationDate: Date;
}

declare class AWSIoTThingTypeProperties extends AWSModel {

	static alloc(): AWSIoTThingTypeProperties; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTThingTypeProperties; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTThingTypeProperties; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTThingTypeProperties; // inherited from AWSMTLModel

	static new(): AWSIoTThingTypeProperties; // inherited from NSObject

	searchableAttributes: NSArray<string>;

	thingTypeDescription: string;
}

declare class AWSIoTTopicRule extends AWSModel {

	static alloc(): AWSIoTTopicRule; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTTopicRule; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTTopicRule; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTTopicRule; // inherited from AWSMTLModel

	static new(): AWSIoTTopicRule; // inherited from NSObject

	actions: NSArray<AWSIoTAction>;

	awsIotSqlVersion: string;

	createdAt: Date;

	detail: string;

	ruleDisabled: number;

	ruleName: string;

	sql: string;
}

declare class AWSIoTTopicRuleListItem extends AWSModel {

	static alloc(): AWSIoTTopicRuleListItem; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTTopicRuleListItem; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTTopicRuleListItem; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTTopicRuleListItem; // inherited from AWSMTLModel

	static new(): AWSIoTTopicRuleListItem; // inherited from NSObject

	createdAt: Date;

	ruleArn: string;

	ruleDisabled: number;

	ruleName: string;

	topicPattern: string;
}

declare class AWSIoTTopicRulePayload extends AWSModel {

	static alloc(): AWSIoTTopicRulePayload; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTTopicRulePayload; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTTopicRulePayload; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTTopicRulePayload; // inherited from AWSMTLModel

	static new(): AWSIoTTopicRulePayload; // inherited from NSObject

	actions: NSArray<AWSIoTAction>;

	awsIotSqlVersion: string;

	detail: string;

	ruleDisabled: number;

	sql: string;
}

declare class AWSIoTTransferCertificateRequest extends AWSRequest {

	static alloc(): AWSIoTTransferCertificateRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTTransferCertificateRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTTransferCertificateRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTTransferCertificateRequest; // inherited from AWSMTLModel

	static new(): AWSIoTTransferCertificateRequest; // inherited from NSObject

	certificateId: string;

	targetAwsAccount: string;

	transferMessage: string;
}

declare class AWSIoTTransferCertificateResponse extends AWSModel {

	static alloc(): AWSIoTTransferCertificateResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTTransferCertificateResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTTransferCertificateResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTTransferCertificateResponse; // inherited from AWSMTLModel

	static new(): AWSIoTTransferCertificateResponse; // inherited from NSObject

	transferredCertificateArn: string;
}

declare class AWSIoTTransferData extends AWSModel {

	static alloc(): AWSIoTTransferData; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTTransferData; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTTransferData; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTTransferData; // inherited from AWSMTLModel

	static new(): AWSIoTTransferData; // inherited from NSObject

	acceptDate: Date;

	rejectDate: Date;

	rejectReason: string;

	transferDate: Date;

	transferMessage: string;
}

declare class AWSIoTUpdateCACertificateRequest extends AWSRequest {

	static alloc(): AWSIoTUpdateCACertificateRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTUpdateCACertificateRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTUpdateCACertificateRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTUpdateCACertificateRequest; // inherited from AWSMTLModel

	static new(): AWSIoTUpdateCACertificateRequest; // inherited from NSObject

	certificateId: string;

	latestAutoRegistrationStatus: AWSIoTAutoRegistrationStatus;

	latestStatus: AWSIoTCACertificateStatus;
}

declare class AWSIoTUpdateCertificateRequest extends AWSRequest {

	static alloc(): AWSIoTUpdateCertificateRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTUpdateCertificateRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTUpdateCertificateRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTUpdateCertificateRequest; // inherited from AWSMTLModel

	static new(): AWSIoTUpdateCertificateRequest; // inherited from NSObject

	certificateId: string;

	latestStatus: AWSIoTCertificateStatus;
}

declare class AWSIoTUpdateThingRequest extends AWSRequest {

	static alloc(): AWSIoTUpdateThingRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTUpdateThingRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTUpdateThingRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTUpdateThingRequest; // inherited from AWSMTLModel

	static new(): AWSIoTUpdateThingRequest; // inherited from NSObject

	attributePayload: AWSIoTAttributePayload;

	expectedVersion: number;

	removeThingType: number;

	thingName: string;

	thingTypeName: string;
}

declare class AWSIoTUpdateThingResponse extends AWSModel {

	static alloc(): AWSIoTUpdateThingResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSIoTUpdateThingResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSIoTUpdateThingResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSIoTUpdateThingResponse; // inherited from AWSMTLModel

	static new(): AWSIoTUpdateThingResponse; // inherited from NSObject
}

declare var AWSIoTVersionNumber: number;

declare var AWSIoTVersionNumberVar: number;

declare var AWSIoTVersionString: interop.Reference<number>;

declare var AWSIoTVersionStringVar: interop.Reference<number>;

declare var AWSSRHTTPResponseErrorKey: string;

declare const enum AWSSRReadyState {

	R_CONNECTING = 0,

	R_OPEN = 1,

	R_CLOSING = 2,

	R_CLOSED = 3
}

declare const enum AWSSRStatusCode {

	CodeNormal = 1000,

	CodeGoingAway = 1001,

	CodeProtocolError = 1002,

	CodeUnhandledType = 1003,

	NoStatusReceived = 1005,

	CodeInvalidUTF8 = 1007,

	CodePolicyViolated = 1008,

	CodeMessageTooBig = 1009
}

declare class AWSSRWebSocket extends NSObject implements NSStreamDelegate {

	static alloc(): AWSSRWebSocket; // inherited from NSObject

	static new(): AWSSRWebSocket; // inherited from NSObject

	delegate: AWSSRWebSocketDelegate;

	readonly protocol: string;

	readonly readyState: AWSSRReadyState;

	readonly receivedHTTPHeaders: any;

	requestCookies: NSArray<any>;

	readonly url: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { URL: NSURL; });

	constructor(o: { URL: NSURL; protocols: NSArray<any>; });

	constructor(o: { URL: NSURL; protocols: NSArray<any>; allowsUntrustedSSLCertificates: boolean; });

	constructor(o: { URLRequest: NSURLRequest; });

	constructor(o: { URLRequest: NSURLRequest; protocols: NSArray<any>; });

	constructor(o: { URLRequest: NSURLRequest; protocols: NSArray<any>; allowsUntrustedSSLCertificates: boolean; });

	class(): typeof NSObject;

	close(): void;

	closeWithCodeReason(code: number, reason: string): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithURL(url: NSURL): this;

	initWithURLProtocols(url: NSURL, protocols: NSArray<any>): this;

	initWithURLProtocolsAllowsUntrustedSSLCertificates(url: NSURL, protocols: NSArray<any>, allowsUntrustedSSLCertificates: boolean): this;

	initWithURLRequest(request: NSURLRequest): this;

	initWithURLRequestProtocols(request: NSURLRequest, protocols: NSArray<any>): this;

	initWithURLRequestProtocolsAllowsUntrustedSSLCertificates(request: NSURLRequest, protocols: NSArray<any>, allowsUntrustedSSLCertificates: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	open(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scheduleInRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;

	self(): this;

	send(data: any): void;

	sendPing(data: NSData): void;

	setDelegateDispatchQueue(queue: NSObject): void;

	setDelegateOperationQueue(queue: NSOperationQueue): void;

	streamHandleEvent(aStream: NSStream, eventCode: NSStreamEvent): void;

	unscheduleFromRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;
}

interface AWSSRWebSocketDelegate extends NSObjectProtocol {

	webSocketDidCloseWithCodeReasonWasClean?(webSocket: AWSSRWebSocket, code: number, reason: string, wasClean: boolean): void;

	webSocketDidFailWithError?(webSocket: AWSSRWebSocket, error: NSError): void;

	webSocketDidOpen?(webSocket: AWSSRWebSocket): void;

	webSocketDidReceiveMessage(webSocket: AWSSRWebSocket, message: any): void;

	webSocketDidReceivePong?(webSocket: AWSSRWebSocket, pongPayload: NSData): void;
}
declare var AWSSRWebSocketDelegate: {

	prototype: AWSSRWebSocketDelegate;
};

declare var AWSSRWebSocketErrorDomain: string;

declare class MQTTDecoder extends NSObject implements NSStreamDelegate {

	static alloc(): MQTTDecoder; // inherited from NSObject

	static new(): MQTTDecoder; // inherited from NSObject

	delegate: MQTTDecoderDelegate;

	status: MQTTDecoderStatus;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { stream: NSInputStream; });

	class(): typeof NSObject;

	close(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithStream(aStream: NSInputStream): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	open(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	streamHandleEvent(aStream: NSStream, eventCode: NSStreamEvent): void;
}

interface MQTTDecoderDelegate {

	decoderHandleEvent(sender: MQTTDecoder, eventCode: MQTTDecoderEvent): void;

	decoderNewMessage(sender: MQTTDecoder, msg: MQTTMessage): void;
}
declare var MQTTDecoderDelegate: {

	prototype: MQTTDecoderDelegate;
};

declare const enum MQTTDecoderEvent {

	ProtocolError = 0,

	ConnectionClosed = 1,

	ConnectionError = 2
}

declare const enum MQTTDecoderStatus {

	Initializing = 0,

	DecodingHeader = 1,

	DecodingLength = 2,

	DecodingData = 3,

	ConnectionClosed = 4,

	ConnectionError = 5,

	ProtocolError = 6
}

declare class MQTTEncoder extends NSObject implements NSStreamDelegate {

	static alloc(): MQTTEncoder; // inherited from NSObject

	static new(): MQTTEncoder; // inherited from NSObject

	delegate: MQTTEncoderDelegate;

	status: MQTTEncoderStatus;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { stream: NSOutputStream; });

	class(): typeof NSObject;

	close(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	encodeMessage(msg: MQTTMessage): void;

	initWithStream(aStream: NSOutputStream): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	open(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	streamHandleEvent(aStream: NSStream, eventCode: NSStreamEvent): void;
}

interface MQTTEncoderDelegate {

	encoderHandleEvent(sender: MQTTEncoder, eventCode: MQTTEncoderEvent): void;
}
declare var MQTTEncoderDelegate: {

	prototype: MQTTEncoderDelegate;
};

declare const enum MQTTEncoderEvent {

	Ready = 0,

	ErrorOccurred = 1
}

declare const enum MQTTEncoderStatus {

	Initializing = 0,

	Ready = 1,

	Sending = 2,

	EndEncountered = 3,

	Error = 4
}

declare class MQTTMessage extends NSObject {

	static alloc(): MQTTMessage; // inherited from NSObject

	static connectMessageWithClientIdUserNamePasswordKeepAliveCleanSession(clientId: string, userName: string, password: string, keeplive: number, cleanSessionFlag: boolean): any;

	static connectMessageWithClientIdUserNamePasswordKeepAliveCleanSessionWillTopicWillMsgWillQoSWillRetain(clientId: string, userName: string, password: string, keeplive: number, cleanSessionFlag: boolean, willTopic: string, willData: NSData, willQoS: number, willRetainFlag: boolean): any;

	static disconnectMessage(): any;

	static new(): MQTTMessage; // inherited from NSObject

	static pingreqMessage(): any;

	static pubackMessageWithMessageId(msgId: number): any;

	static pubcompMessageWithMessageId(msgId: number): any;

	static publishMessageWithDataOnTopicQosMsgIdRetainFlagDupFlag(payload: NSData, topic: string, qosLevel: number, msgId: number, retain: boolean, dup: boolean): any;

	static publishMessageWithDataOnTopicRetainFlag(payload: NSData, theTopic: string, retain: boolean): any;

	static pubrecMessageWithMessageId(msgId: number): any;

	static pubrelMessageWithMessageId(msgId: number): any;

	static subscribeMessageWithMessageIdTopicQos(msgId: number, topic: string, qos: number): any;

	static unsubscribeMessageWithMessageIdTopic(msgId: number, topic: string): any;

	data: NSData;

	isDuplicate: boolean;

	qos: number;

	retainFlag: boolean;

	type: number;

	constructor(o: { type: number; });

	constructor(o: { type: number; data: NSData; });

	constructor(o: { type: number; qos: number; data: NSData; });

	constructor(o: { type: number; qos: number; retainFlag: boolean; dupFlag: boolean; data: NSData; });

	initWithType(aType: number): this;

	initWithTypeData(aType: number, aData: NSData): this;

	initWithTypeQosData(aType: number, aQos: number, aData: NSData): this;

	initWithTypeQosRetainFlagDupFlagData(aType: number, aQos: number, aRetainFlag: boolean, aDupFlag: boolean, aData: NSData): this;

	setDupFlag(): void;
}

declare const enum MQTTMessageType {

	Connect = 1,

	Connack = 2,

	Publish = 3,

	Puback = 4,

	Pubrec = 5,

	Pubrel = 6,

	Pubcomp = 7,

	Subscribe = 8,

	Suback = 9,

	Unsubscribe = 10,

	Unsuback = 11,

	Pingreq = 12,

	Pingresp = 13,

	Disconnect = 14
}

declare class MQTTSession extends NSObject {

	static alloc(): MQTTSession; // inherited from NSObject

	static new(): MQTTSession; // inherited from NSObject

	connectionHandler: (p1: MQTTSessionEvent) => void;

	delegate: MQTTSessionDelegate;

	messageHandler: (p1: NSData, p2: string) => void;

	publishRetryThrottle: number;

	subsAckHandler: (p1: number) => void;

	constructor(o: { clientId: string; userName: string; password: string; keepAlive: number; cleanSession: boolean; willTopic: string; willMsg: NSData; willQoS: number; willRetainFlag: boolean; publishRetryThrottle: number; });

	close(): void;

	connectToInputStreamOutputStream(readStream: NSInputStream, writeStream: NSOutputStream): any;

	initWithClientIdUserNamePasswordKeepAliveCleanSessionWillTopicWillMsgWillQoSWillRetainFlagPublishRetryThrottle(theClientId: string, theUserName: string, thePassword: string, theKeepAliveInterval: number, theCleanSessionFlag: boolean, willTopic: string, willMsg: NSData, willQoS: number, willRetainFlag: boolean, publishRetryThrottle: number): this;

	isReadyToPublish(): boolean;

	publishDataAtLeastOnceOnTopic(theData: NSData, theTopic: string): number;

	publishDataAtLeastOnceOnTopicRetain(theData: NSData, theTopic: string, retainFlag: boolean): number;

	publishDataAtMostOnceOnTopic(theData: NSData, theTopic: string): void;

	publishDataAtMostOnceOnTopicRetain(theData: NSData, theTopic: string, retainFlag: boolean): void;

	publishDataExactlyOnceOnTopic(theData: NSData, theTopic: string): number;

	publishDataExactlyOnceOnTopicRetain(theData: NSData, theTopic: string, retainFlag: boolean): number;

	publishDataOnTopic(theData: NSData, theTopic: string): void;

	publishJsonOnTopic(payload: any, theTopic: string): void;

	send(msg: MQTTMessage): void;

	subscribeToTopicAtLevel(topic: string, qosLevel: number): number;

	subscribeTopic(theTopic: string): number;

	unsubscribeTopic(theTopic: string): number;
}

interface MQTTSessionDelegate {

	sessionHandleEvent(session: MQTTSession, eventCode: MQTTSessionEvent): void;

	sessionNewAckForMessageId?(session: MQTTSession, msgId: number): void;

	sessionNewMessageOnTopic(session: MQTTSession, data: NSData, topic: string): void;
}
declare var MQTTSessionDelegate: {

	prototype: MQTTSessionDelegate;
};

declare const enum MQTTSessionEvent {

	Connected = 0,

	ConnectionRefused = 1,

	ConnectionClosed = 2,

	ConnectionError = 3,

	ProtocolError = 4
}

declare const enum MQTTSessionStatus {

	Created = 0,

	Connecting = 1,

	Connected = 2,

	Error = 3
}

declare class MQttTxFlow extends NSObject {

	static alloc(): MQttTxFlow; // inherited from NSObject

	static flowWithMsgDeadline(aMsg: MQTTMessage, aDeadline: number): any;

	static new(): MQttTxFlow; // inherited from NSObject

	deadline: number;

	msg: MQTTMessage;

	constructor(o: { msg: MQTTMessage; deadline: number; });

	initWithMsgDeadline(aMsg: MQTTMessage, aDeadline: number): this;
}
