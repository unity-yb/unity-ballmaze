// トラップの処理を行うスクリプト。

// トリガーにゲームオブジェクトが入ったときに実行される関数。
function OnTriggerEnter(other : Collider) {
	// 相手がボールであるかどうかを調べる。
	if (other.gameObject.tag == "Ball") {
		// リスタート位置を表すゲームオブジェクトを取得する。
		var respawn : GameObject = GameObject.FindWithTag("Respawn");
		// ボールの位置を強制的にリスタート位置に戻す。
		other.gameObject.transform.position = respawn.transform.position;
	}
}
