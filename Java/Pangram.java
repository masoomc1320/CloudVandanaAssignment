import java.util.Scanner;

public class Pangram {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		System.out.println(isPangram(str));
		}
	public static Boolean isPangram(String str){
		if(str.length()<26) {
			return false;
		}
		for(char ch='a'; ch<='z'; ch++) {
			if(str.indexOf(ch)<0) {
				return false;
			}
		}
		return true;
	}

}
