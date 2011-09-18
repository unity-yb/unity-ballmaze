function Update () {
	transform.rotation = 
		Quaternion.AngleAxis(Input.GetAxis("Horizontal") * 10.0, Vector3.forward) *
		Quaternion.AngleAxis(Input.GetAxis("Vertical") * -10.0, Vector3.right);
}
