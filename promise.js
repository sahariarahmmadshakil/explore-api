try {
    // Attempt to calculate the square root of a number
    const number = 10;
  
    if (number > 0) {
      throw "condition not fulfil"
    }
  
  } catch (error) {
    // Handle the exception
    console.log("An error occurred:");
  } finally {
    // This block is executed regardless of whether there was an exception
    console.log("Cleanup code or final statements");
  }
  