// 迷路以外の構造をまとめて傾けるためのスクリプト。

// 更新処理。
function Update() {
	// ジョイスティックの横軸(Horizontal)からZ軸回転量を、
	// 縦軸(Vertical)からX軸回転量を、それぞれ求めている。
	// 回転角は10度にしている。
	transform.rotation = 
		Quaternion.AngleAxis(Input.GetAxis("Horizontal") * 10.0, Vector3.forward) *
		Quaternion.AngleAxis(Input.GetAxis("Vertical") * -10.0, Vector3.right);
}
