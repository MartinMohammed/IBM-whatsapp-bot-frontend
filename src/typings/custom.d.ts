/**
 * Declare a namespace to extend the existing NodeJS namespace.
 */
declare namespace NodeJS {
    /**
     * Extend the ProcessEnv interface to define custom environment variables and their types.
     */
    interface ProcessEnv {
      NODE_ENV: "dev" | undefined;  // if undefed -> production 
    }
  }
  