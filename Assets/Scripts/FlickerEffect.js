// トラップを明滅させるスクリプト。

private var originalColor : Color; // オリジナルの色情報。

// 初期化処理。
function Start() {
	// オリジナルの色情報を保存する。
	originalColor = renderer.material.color;
}

// 更新処理。
function Update() {
	// 色の強さをサイン波（の絶対値）によって決める。
	var level : float = Mathf.Abs(Mathf.Sin(Time.time * 20));
	// オリジナルの色に強さをかけ合わせて設定する。
	renderer.material.color = originalColor * level;
}
