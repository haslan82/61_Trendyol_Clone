interface AvatarProps{
    //size?: "small" | "medium" | "large",
    size: number,
    uri: string,
    style?: any,
    onPress?: () => void,
    isOnline?: boolean,
    name: string|null,
    image?: string,
    surname: string|null

}
export type {AvatarProps};