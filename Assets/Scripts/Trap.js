function OnTriggerEnter(other : Collider) {
	if (other.gameObject.tag == "Ball") {
		var respawn : GameObject = GameObject.FindWithTag("Respawn");
		other.gameObject.transform.position = respawn.transform.position;
	}
}
