package tushin.dwr;

public class Ranking {

	Record[] records;

	public Ranking(){
		init(10);
	}

	public Ranking(int len){
		init(len);
	}

	public void init(int length){
		records = new Record[length];
		for(int i=0; i<records.length; i++){
			records[i] = new Record();
		}
	}

	public void addRecord(Record rec){
		int i;

		i = records.length;
		while( i > 0 && records[i-1].getScore() < rec.getScore() ){
			if( i < records.length ){
				records[i] = records[i-1];
			}
			i--;
		}
		
		records[i] = rec;
	}

	public Record[] getRecord(){
		return records;
	}
}
