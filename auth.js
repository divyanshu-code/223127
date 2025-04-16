// authService.js

export const getAuthToken = async () => {
    try {
      const response = await fetch("http://20.244.56.144/evaluation-service/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: "divyanshu_223127@saitm.org",
            name: " divyanshu",
            rollNo: "223127",
            accessCode: "HtQdzQ",
            clientID: "0f99f702-8473-4e74-b855-9cc34d41d892",
            clientSecret: "BVkJcgPZYpkwUqVt"
        }),
      });
  
      const data = await response.json();
      return data.token;  
    } catch (error) {
      console.error("Error fetching auth token:", error);
      return null;
    }
  };
  