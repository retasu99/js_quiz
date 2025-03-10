const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン', 
      'プレイステーション', 
      'ニンテンドースイッチ', 
      'ニンテンドーDS'],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [
      'MOTHER2', 
      'スーパーマリオブラザーズ3', 
      'スーパードンキーコング', 
      '星のカービィ'],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーⅣの主人公の名前は誰？',
    answers: [
      'フリオニール', 
      'クラウド', 
      'ティーダ', 
      'セシル'],
    correct: 'セシル'
  }
];

const quizLength = quiz.length; //配列question（クイズの問題数）をquizLengthという名前で定義する
let quizIndex = 0; //クイズの出題をwhile文で反復する際に使う
let score =0; //正解のボタンをクリックした回数

const $button = document.getElementsByTagName('button'); //HTML上のボタンを$buttonという名前（定数）で定義する
const buttonLength = $button.length; //ボタン（選択肢）の数をbuttonLengthという定数で定義する


//定数の文字列をHTML上部の見出しに問題文として反映させる
//定数の文字列をHTML上のボタンに反映させる
  //文字列をボタンに反映させる処理を関数として定義する
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}


//関数を呼び出す（問題文と選択肢を表示する関数）
setupQuiz();

//正誤判定のif文を関数として定義する
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    // window.alert('正解!')
    score++;
  // } else {
    // window.alert('不正解')
  }

  quizIndex++;

  if (quizIndex < quizLength){
    //問題がまだ残っていれば、こちらを実行
    setupQuiz();
  } else {
    //すべての問題へ回答していれば、こちらを実行
    window.alert('終了です！お疲れ様でした！ あなたの正解数は、' + quizLength + '問中' + score + '問です！')
  }

};


//関数clickHandlerを呼び出し、正誤判定を行う（選択肢の数だけ実行する）
let handlerIndex = 0;
  while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e)=> {
      clickHandler(e);
    });
    handlerIndex++;
}

