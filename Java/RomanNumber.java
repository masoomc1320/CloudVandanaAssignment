import java.util.Scanner;

public class RomanNumber {
	public static int getNum(char ch) {
		switch(ch) {
			case 'I':return 1;
			case 'V':return 5;
			case 'X':return 10;
			case 'L':return 50;
			case 'C':return 100;
			case 'D':return 500;
			case 'M':return 1000;
			default :return 0;
		} 	
	}
	
	public static int romanToInt(String s) {
		int n=s.length();
		int sum=0;
		for(int i=0; i<n; i++) {
			char ch1 = s.charAt(i);
			if((i+1)<n &&getNum(ch1)< getNum(s.charAt(i+1)))
			sum=sum-getNum(ch1);
			else 
				sum=sum+getNum(ch1);
		}
		return sum;
	}
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		int answer = romanToInt(str);
		System.out.println(answer);
	}
	

}
