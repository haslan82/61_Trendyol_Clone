

interface InputProps{
    value: string;
    title:string;
    onChangeText: (value: string) => void;
    placeholder: string;
    secureTextEntry?: boolean;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    autoCorrect?: boolean;
    returnKeyType?: "done" | "go" | "next" | "search" | "send";
}

export type {InputProps};