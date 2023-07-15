/** Represents the server baes url */
export const SERVER_BASE_URL = `${
    process.env.NODE_ENV === "dev"
      ? "http://192.168.2.38:3000"
      : "https://gymdo.net"
  }`;

export const defaultWhatsappProfileImage: string = "https://bootdey.com/img/Content/avatar/avatar1.png"