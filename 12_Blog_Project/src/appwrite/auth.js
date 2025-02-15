import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class Auth {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl) // Your API Endpoint
      .setProject(conf.projectId); // Your project ID
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    const userAccount = await this.account.create(
      ID.unique(),
      email,
      password,
      name
    );
    if (userAccount) {
      return this.login({ email, password });
    } else {
      throw new Error("Failed to create user account");
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createSession(email, password);
    } catch (e) {
      throw new Error("Failed to login user account");
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (e) {
      throw new Error("Failed to get current user");
    }
    return null;
  }

  async deleteSessions() {
    try {
      return await this.account.deleteSessions();
    } catch (e) {
      throw new Error("Failed to delete session");
    }
  }
}
const authService = new Auth();

export default authService;
