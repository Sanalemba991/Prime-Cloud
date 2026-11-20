import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContact extends Document {
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  source?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema: Schema<IContact> = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    companyName: {
      type: String,
      trim: true,
      default: "",
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    service: {
      type: String,
      required: [true, "Service is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
    source: {
      type: String,
      default: "contact_page", // "contact_page" | "services_modal"
    },
  },
  {
    timestamps: true,
  }
);

export const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);
