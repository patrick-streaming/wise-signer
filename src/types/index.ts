// Wallet types
export type WalletType = "metamask" | "safeWallet" | "trezor";

export type FakeWebsiteType = "Uniswap" | "OpenSea" | "SendEth" | "Aave";

export type FakeWebsiteComponentProps = {
    fakeWebsiteEdition: number;
    primaryButtonText?: string;
    onPrimaryButtonClick: () => void;
    buttonDisabled?: boolean;
};

export interface SignatureDetails {
    requestFrom: string;
    message: string;
}

// Transaction details type
export interface TransactionDetails {
    fromAccount: string;
    toAccount: string;
    amount?: string;
    estimatedFee: {
        usd: string;
        eth: string;
    };
    functionName: string;
    data: string;
    networkName?: string;
    // Safe wallet specific properties
    safeThreshold?: number;
    safeConfirmations?: number;
    safeRequiresAdditionalConfirmation?: boolean;
    safeAdditionalWalletType?: WalletType;
}

// Question types
export interface FeedbackContent {
    pages: string[];
}

export interface BaseQuestionProps {
    questionNumber: number;
    question: string;
    feedbackContent: FeedbackContent;
    nextPageUrl?: string;
    prevPageUrl?: string;
}

export interface MultiChoiceQuestionProps extends BaseQuestionProps {
    type: "single" | "multi";
    options: { id: string; text: string }[];
    correctAnswers: string[];
}

export interface SignOrRejectQuestionProps extends BaseQuestionProps {
    type: "signOrReject";
    expectedAction: "sign" | "reject";
    walletType: WalletType;
    // Website props
    websiteUrl?: string;
    websiteTitle?: string;
    websiteContent?: React.ReactNode;
    // Optional callback for custom interaction handler
    onInteractWithWallet?: () => void;
    interactionButtonText?: string;
    // Transaction details
    transactionOrSignatureDetails: TransactionDetails | SignatureDetails;
}

export type QuestionProps = MultiChoiceQuestionProps | SignOrRejectQuestionProps;