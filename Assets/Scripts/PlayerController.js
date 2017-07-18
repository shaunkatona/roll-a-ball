#pragma strict

public var speed : float;
public var countText : UI.Text;
public var winText : UI.Text;

private var rb : Rigidbody;
private var count : int;

function Start() {
	rb = GetComponent.<Rigidbody>();
	count = 0;
	setCountText();
	winText.text = '';
}

function FixedUpdate() {
	var moveHorizontal : float = Input.GetAxis('Horizontal');
	var moveVertical : float = Input.GetAxis('Vertical');

	var movement : Vector3 = new Vector3(moveHorizontal, 0, moveVertical);

	rb.AddForce(movement * speed);
}

function OnTriggerEnter(other : Collider) {
	if (other.gameObject.CompareTag('Pick Up')) {
		other.gameObject.SetActive(false);
		count++;
		setCountText();
	}
}

function setCountText() {
	countText.text = 'Count: ' + count.ToString();

	if (count >= 12) {
		winText.text = 'YOU WIN!';
	}
}
