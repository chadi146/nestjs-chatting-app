import { registerAs } from "@nestjs/config";
export default registerAs("jwt", () => ({
  secret: process.env.JWT_SECRET,
  expiresIn: process.env.JWT_EXPIRES_IN,
  cookieExpiresIn: process.env.JWT_COOKIE_EXPIRES_IN,
}));
