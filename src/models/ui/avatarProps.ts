interface AvatarProps{
    size?: "small" | "medium" | "large",
    uri: string,
    style?: any,
    onPress?: () => void,
    isOnline?: boolean,
    name: string,
    image?: string,
    surname: string

}
export type {AvatarProps};