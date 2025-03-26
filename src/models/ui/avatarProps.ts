interface AvatarProps{
    //size?: "small" | "medium" | "large",
    size: number,
    style?: any,
    onPress?: () => void,
    isOnline?: boolean,
    name: string|undefined,
    image?: string|undefined,
    surname: string|undefined

}
export type {AvatarProps};