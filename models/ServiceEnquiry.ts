import mongoose, { Schema, Document, Model } from "mongoose";

export interface IServiceEnquiry extends Document {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceEnquirySchema: Schema<IServiceEnquiry> = new Schema(
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
      required: [true, "Phone number is required"],
      trim: true,
    },
    service: {
      type: String,
      required: [true, "Service is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message or description is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ServiceEnquiry: Model<IServiceEnquiry> =
  mongoose.models.ServiceEnquiry ||
  mongoose.model<IServiceEnquiry>("ServiceEnquiry", ServiceEnquirySchema);
