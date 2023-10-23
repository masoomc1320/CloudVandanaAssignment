import java.util.Arrays;

public class ShuffleArray {
	public static void shuffle(int[] array) {
		for(int i=0; i<array.length; i++) {
			int n = i +(int)(Math.random() * (array.length-i));
			int temp = array[n];
			array[n]=array[i];
			array[i] = temp;
			
		}
	}
	
	public static void main(String[] args) {
		 int[] arr = {1,2,3,4,5,6,7};
		 shuffle(arr);
		 System.out.println(Arrays.toString(arr));
	}
}
