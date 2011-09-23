// 重力の制御により、擬似的に迷路を傾けた状態を作り出すためのスクリプト。

// 更新処理。
function Update() {
	// 20の大きさの下向きベクトルに対して回転を掛けることによって、
	// 傾いたベクトルを作り出す。
	// 傾きの量は、ジョイスティックの横軸(Horizontal)からZ軸回転量を、
	// 縦軸(Vertical)からX軸回転量を、それぞれ求めている。
	// 回転角は、かなり大きめの60度にしている。
	Physics.gravity = 
		Quaternion.AngleAxis(Input.GetAxis("Horizontal") * 60.0, Vector3.forward) *
		Quaternion.AngleAxis(Input.GetAxis("Vertical") * -60.0, Vector3.right) *
		Vector3(0.0, -20.0, 0.0);
}
