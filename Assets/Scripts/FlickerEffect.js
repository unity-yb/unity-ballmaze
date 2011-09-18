private var originalColor : Color;

function Awake () {
	originalColor = renderer.material.color;
}

function Update () {
	var level : float = Mathf.Abs(Mathf.Sin(Time.time * 20));
	renderer.material.color = originalColor * level;
}
