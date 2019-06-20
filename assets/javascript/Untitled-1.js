// Returns sum of all digits in numbers from 1 to n 
int sumOfDigitsFrom1ToN(int n) 
{ 
    int result = 0; // initialize result 
  
    // One by one compute sum of digits in every number from 
    // 1 to n 
    for (int x = 1; x <= n; x++) 
        result += sumOfDigits(x); 
  
    return result; 
} 