var labelStyle : GUIStyle;

private var ballCount : int;
private var counter : int;
private var cleared : boolean;

function Start() {
	ballCount = GameObject.FindGameObjectsWithTag("Ball").length;
}

function OnTriggerEnter(other : Collider) {
	if (other.gameObject.tag == "Ball") {
		counter++;
		if (counter == ballCount && cleared == false) {
			cleared = true;
			yield WaitForSeconds(2.0);
			Application.LoadLevel("Title");
		}
	}
}

function OnTriggerExit(other : Collider) {
	if (other.gameObject.tag == "Ball") {
		counter--;
	}
}

function OnGUI() {
	if (cleared == true) {
		var sw = Screen.width;
		var sh = Screen.height;
		GUI.Label(Rect(0, sh / 3, sw, sh / 3), "CLEARED!", labelStyle);
	}
}
