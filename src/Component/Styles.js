import { StyleSheet, Dimensions } from 'react-native';
import Fonts from '../Utils/CustomFonts';
import Config from '../Utils/Config';
import Colors from '../Utils/Colorss';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create(props => ({
    //GlobalInput
    input_style: { height: (height / 15) - (Config.TitleSmallFontSize) - (Config.margin), paddingBottom: -10, paddingTop: -10, color: Colors.Black, fontFamily: Fonts.GeometricRegular, fontSize: Config.TitleSemiBigFontSize, minHeight: 0 },
    LabelStyle: { color: Colors.Pinkk },
    DefaultErrorStyle: { height: 0, margin: 0 },
    IPIconDefaultContainerStyle: { height: 'auto', marginVertical: 0, paddingHorizontal: Config.margin },

    // ============================= Header ================
    HeaderMainView: { height: height / 14, padding: Config.margin, width: '100%', backgroundColor: Colors.White, flexDirection: 'row', justifyContent: 'space-between', elevation: 3 },
    SearchInputMainView: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: Config.margin, borderRadius: Config.borderradius, width: width - (Config.margin * 2), alignSelf: 'center', marginTop: Config.margin },

    // Home
    container: { flex: 1, backgroundColor: Colors.White, alignItems: 'center' },
    MainView: { width: (width - (Config.margin * 3)), marginVertical: Config.margin, borderBottomColor: Colors.Grey, borderBottomWidth: 0.2 },
    TextView: { flexDirection: 'row', },
    Text1: { fontWeight: 'bold' }
}));