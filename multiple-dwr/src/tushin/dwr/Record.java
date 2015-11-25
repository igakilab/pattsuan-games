package tushin.dwr;

public class Record {
	private String name;
	private int score;

	public Record(){
		name = "名無し";
		score = 0;
	}

	public Record(String n0, int s0){
		this();
		setName(n0);
		setScore(s0);
	}

	public String getName(){
		return name;
	}
	public void setName(String n0){
		name = n0;
	}

	public int getScore(){
		return score;
	}
	public void setScore(int s0){
		score = s0;
	}
}
