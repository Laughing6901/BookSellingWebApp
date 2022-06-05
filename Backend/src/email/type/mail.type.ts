export type mailOptionTypes = {
  from: string,
  to: string,
  subject?: string,
  html: any,
}

export type optCodeSendType = {
  otpCode: number,
  sub: number
}

export type mailContentType = {
  subject: string,
  html: string
}