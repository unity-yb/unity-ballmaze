// ゴールの判定と、ゴール時の表示を行うスクリプト。

var labelStyle : GUIStyle; // GUI（文字表示）に使うスタイル。

private var ballCount : int;	// ボールの総数。
private var counter : int;		// ゴールに触れたボールを数えるカウンター。
private var cleared : boolean;	// trueならクリアした状態。

// 初期化。
function Start() {
	// "Ball"タグが付いているゲームオブジェクトの個数を調べる。
	ballCount = GameObject.FindGameObjectsWithTag("Ball").length;
}

// トリガーにゲームオブジェクトが入ったときに実行される関数。
function OnTriggerEnter(other : Collider) {
	// まず、相手がボールであるかどうかを調べる。
	if (other.gameObject.tag == "Ball") {
		// カウンターに1を足す。
		counter++;
		// カウンターがボールの数に等しくなり、
		// なおかつ、またクリアしていない状態だったら……
		if (counter == ballCount && cleared == false) {
			// クリア成立。
			cleared = true;
			// 2秒ウェイトを入れる。
			yield WaitForSeconds(2.0);
			// Titleシーン（タイトル画面）をロードする。
			Application.LoadLevel("Title");
		}
	}
}

// トリガーからゲームオブジェクトが出たときに実行される関数。
function OnTriggerExit(other : Collider) {
	// 相手がボールであるかどうかを調べる。
	if (other.gameObject.tag == "Ball") {
		// カウンターから1を引く。
		counter--;
	}
}

// GUI表示処理。
function OnGUI() {
	// クリアした状態であれば……
	if (cleared == true) {
		// 画面中央付近に"CLEARED!"と表示する。
		// 表示にはスタイル(labelStyle)を使う。
		var sw = Screen.width;
		var sh = Screen.height;
		GUI.Label(Rect(0, sh / 3, sw, sh / 3), "CLEARED!", labelStyle);
	}
}
