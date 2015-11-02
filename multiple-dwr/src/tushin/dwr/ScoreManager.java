package tushin.dwr;

public class ScoreManager {
	Ranking[] ranking = new Ranking[3];
	
	public ScoreManager(){
		for(int i=0; i<ranking.length; i++){
			ranking[i] = new Ranking();
		}
	}

	public void addScore(int id, String name, int score){
		Record new_record = new Record(name, score);
		ranking[id].addRecord(new_record);
	}

	public Record[] getRecord(int id){
		return ranking[id].getRecord();
	}
}
