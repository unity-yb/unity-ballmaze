// ボールがスリープ状態に入るのを防ぐためのスクリプト。

// 更新処理。
function Update() {
	// 常にWakeUpを実行すればスリープに入るのを防ぐことができる。
	rigidbody.WakeUp();
}
