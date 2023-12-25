class Utils {
  /**
   * Get first character from first & last sentences of a username
   * @param {String} name - Username
   * @return {String} 2 characters string
   */
  static getNameInitial(name) {
    if (name && typeof name === "string") {
      let initials = name.match(/\b\w/g) || [];
      return ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
    }
    return "";
  }
}

export default Utils;
