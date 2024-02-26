import { useGlobalAudioPlayer } from 'react-use-audio-player';

const useSoundEffect = () => {
  const { load, play, stop } = useGlobalAudioPlayer();

  // 定义音效文件路径前缀
  const basePath = "/assets/soundEffects";

  // 播放背景音乐，循环播放
  const loopPlayBackgroundScene1 = () => {
    load(`${basePath}/background_scene1.mp3`, { loop: true, autoplay: true });
  };

  const loopPlayBackgroundScene2 = () => {
    load(`${basePath}/background_scene2.mp3`, { loop: true, autoplay: true });
  };

  // 播放一次性音效
  const playSoundOnce = (src: string) => {
    load(`${basePath}/${src}`, { autoplay: true });
  };

  // 特定声音的快捷方式
  const playButtonOnce = () => playSoundOnce("button.mp3");
  const playCommentaryOnce = () => playSoundOnce("commentary.mp3");
  const playCongratsPassedOnce = () => playSoundOnce("congrats_passed.mp3");
  const playCorrectAnswerOnce = () => playSoundOnce("correct_answer.mp3");
  const playStartGameOnce = () => playSoundOnce("start_game.mp3");
  const playWrongAnswerOnce = () => playSoundOnce("wrong_answer.mp3");

  return {
    loopPlayBackgroundScene1,
    loopPlayBackgroundScene2,
    playButtonOnce,
    playCommentaryOnce,
    playCongratsPassedOnce,
    playCorrectAnswerOnce,
    playStartGameOnce,
    playWrongAnswerOnce
  };
};

export default useSoundEffect;
