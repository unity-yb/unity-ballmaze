// タイトル画面の表示を行うスクリプト。

var labelStyle : GUIStyle; // 文字表示に使うスタイル。

// 更新処理。
function Update() {
	// ジャンプボタン（キーボードではスペースキー）が押されていたら……
	if (Input.GetButtonDown("Jump")) {
		// Mainシーンをロードする。
		Application.LoadLevel("Main");
	}
}

// GUI表示処理。
function OnGUI() {
	// スタイルを使って画面中央付近に文字を表示する。
	var sw = Screen.width;
	var sh = Screen.height;
	GUI.Label(Rect(0, sh / 4, sw, sh / 4), "BALL MAZE", labelStyle);
	GUI.Label(Rect(0, sh / 2, sw, sh / 4), "Press Space Key", labelStyle);
}
