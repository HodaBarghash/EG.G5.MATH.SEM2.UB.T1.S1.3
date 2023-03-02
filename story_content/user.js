function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NnAItdeud0":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzqlICm5p6Z2iED4yMsjAVTpRPsz3DBE0gTjhLsKk0XOfto9euq_WZhLmST5-WbWIBI/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

