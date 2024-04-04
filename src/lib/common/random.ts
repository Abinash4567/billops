export default function generateRandomString(length: number): string{
    const characters: string = "ABC-$5&DEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result: string = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * 999)%characters.length);
    }
    return result;
}