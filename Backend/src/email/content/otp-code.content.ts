import { mailContentType } from "../type/mail.type";

export const otpCodeContent = (otp: number):mailContentType => {
  return {
  subject: "[Datasa] Mã xác thực / Verify Code",
  html: `<p style="font-size:16px;">Mã xác thực là: </p>
  <b style="font-size:35px;">${otp}</b>
  <p style="font-size:16px;">Mã xác thực chỉ có hiệu lực trong vòng 1 phút</p>
  <p style="font-size:16px;">Đây là email tự động. Quý khách vui lòng không gửi thư vào địa chỉ này. Mọi vướng mắc liên quan đến dịch vụ, Quý khách vui lòng liên hệ với Hotline 24/7 theo số 1900156868.</p>
  <p style="font-size:16px;"><b>Cám ơn Quý khách đã sử dụng dịch vụ của Datasa</b></p>
  <hr>
  <p style="font-size:16px;">Your OTP is: </p>
  <b style="font-size:35px;">${otp}</b>
  <p style="font-size:16px;">Please do not reply to this automatically-generated email. For further information, please direct your inquiries to: <br>
  - Our Hotline 24/7 at 1900 15 68 68</p>
  <p style="font-size:16px;"><b>Thank you for chatting with Datasa!</b></p>
  `,
  }
}