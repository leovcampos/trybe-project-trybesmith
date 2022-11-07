interface MessageObject {
  [key: string]: string
}
  
export interface IServiceResp<Type> {
  statusCode: number
  data: MessageObject | Type[] | Type
}