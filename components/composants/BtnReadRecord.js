import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';
import StylesBtnReadRecord from '../../assets/style/StyleComposants/StyleBtnReadRecord';

const audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.09);

const BtnReadRecord = ({tabPath, top, left}) => {
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);

  const [playing, setPlaying] = useState(false);
  const [pause, setPause] = useState(false);

  const [playTime, setPlayTime] = useState(false);
  const [duration, setDuration] = useState('00:00:00');

  const onStartPlay = async () => {
    setPlaying(true);
    setPause(false);
    console.log('Player Playing . . .');
    const path = `${RNFS.ExternalDirectoryPath}/Music/empreinteVocal.mp3`;

    // Vérifiez si le fichier existe
    const exists = await RNFS.exists(path);
    if (!exists) {
      console.log("Le fichier audio n'existe pas");
      return;
    }

    const msg = await audioRecorderPlayer.startPlayer(path);
    console.log(msg);
    audioRecorderPlayer.setVolume(1.0);
    audioRecorderPlayer.addPlayBackListener(e => {
      if (typeof e.currentPosition === 'number') {
        setCurrentPositionSec(e.currentPosition);
        let plyTime = audioRecorderPlayer.mmssss(Math.floor(e.currentPosition));
        const parts = plyTime.split(':');
        const secondsPart = parts[1];
        setPlayTime(secondsPart);
        if (e.currentPosition === e.duration) {
          console.log('finished');
          audioRecorderPlayer.stopPlayer();
          setPlayTime(0);
        }
      }

      if (typeof e.duration === 'number' && e.duration > 0) {
        setCurrentDurationSec(e.duration);
        setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
      }
      if (e.currentPosition === e.duration) {
        console.log('finished');
        onStopPlay();
      }
    });
  };

  const onPausePlay = async () => {
    setPlaying(false);
    setPause(true);
    console.log('Player Pausing . . .');
    await audioRecorderPlayer.pausePlayer();
  };

  const onStopPlay = () => {
    setPlaying(false);
    setPause(false);
    console.log('Player Stopped');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  return (
    <TouchableOpacity
      onPress={() => {
        playing ? onStopPlay() : onStartPlay();
      }}
      style={[StylesBtnReadRecord.boxVocal, {top: top, left: left}]}>
      <Text
        style={[
          StylesBtnReadRecord.txtVocal,
          {
            color: tabPath === 'Professionnel' ? 'white' : '#0019A7',
          },
        ]}>
        {playing ? 'Arrêter' : 'Écouter'} :
      </Text>
      <View>
        <Image
          source={require('../../assets/images/voix_ondes_profil.png')}
          style={StylesBtnReadRecord.imgVocal}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BtnReadRecord;
