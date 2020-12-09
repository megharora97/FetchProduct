import React from 'react';
import { Dimensions, FlatList, ScrollView, SafeAreaView, View, ActivityIndicator } from 'react-native';
import { Text, Icon } from 'react-native-elements'
import Header from '../../Component/Header';
import styles from '../../Component/Styles';
import { getProductApi } from '../../Services/Api';
import AsyncStorage from '@react-native-community/async-storage'
const { height, width } = Dimensions.get('window');

export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            SearchValue: '',
            ProductDATA: [],
        }
    }

    async componentDidMount() {
        this.ProductApi()
    }

    async ProductApi() {
        this.setState({ loading: true })
        await getProductApi()
            .then((res) => {
                this.setState({ loading: false })
                console.log('getProductApi res :- ', res);
                let Productdata = res.products
                console.log("ProductApi", Productdata);
                let Data1 = Object.values(Productdata)
                console.log('Data1', Data1);
                this.setState({ ProductDATA: Data1 })
            })
            .catch((error) => {
                this.setState({ loading: false })
                alert(error)
            })
    }

    SearchDataProduct(SearchValue) {
        const { ProductDATA } = this.state;
        if (SearchValue) {
            let newData = []
            if (ProductDATA && ProductDATA != '') {
                newData = ProductDATA.filter(item => {
                    const itemData = `${item.title}`.toLowerCase()
                    const textData = SearchValue;
                    const matching = itemData.match(`${textData}`.toLowerCase());
                    console.log("Matching", matching);
                    return matching;
                });
                console.log("newData", newData);
                return newData
            }
        }
        return [...ProductDATA]
       
    }

    renderItem = ({ item, index }) => {
        return (

            <View style={styles().MainView}>
                <View style={styles().TextView}>
                    <Text style={styles().Text1}>Subcategory:{' '}</Text>
                    <Text>{item.subcategory} </Text>
                </View>

                <View style={styles().TextView}>
                    <Text style={styles().Text1}>Title:{' '}</Text>
                    <Text>{item.title} </Text>
                </View>

                <View style={styles().TextView}>
                    <Text style={styles().Text1}>Popularity:{' '}</Text>
                    <Text>{item.popularity} </Text>
                </View>

                <View style={styles().TextView}>
                    <Text style={styles().Text1}>Price:{' '}</Text>
                    <Text>{item.price} </Text>
                </View>

            </View>
        )
    }

    render() {
        const { loading, SearchValue, ProductDATA, } = this.state;
        console.log("Productrender", ProductDATA);

        return (
            <SafeAreaView style={styles().container}>
                {/* Header */}
                <Header
                    navigation={this.props.navigation}
                    ChangeValue={SearchValue}
                    onChangeValue={(text) => {
                        this.setState({ SearchValue: text })
                    }}
                    Refs={input => { this.textInput = input }}
                    ClearSearch={() => { this.setState({ SearchValue: '', }) }}
                    OnSubmit={() => {  }}
                />
                {loading ?
                    <View style={{ justifyContent: 'center', alignSelf: 'center', flex: 1 }}>
                        <ActivityIndicator size={"large"} color={Colors.Pinkk} />
                    </View>
                    :
                    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                        {/* Products */}
                        <View>
                            {ProductDATA && ProductDATA != '' && ProductDATA.length > 0 ?
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    data={this.SearchDataProduct(SearchValue)}
                                    initialNumToRender={4}
                                    extraData={this.state}
                                    keyExtractor={(item, index) => String(index)}
                                    renderItem={ProductDATA ? this.renderItem : null}
                                />
                                : null
                            }
                        </View>
                    </ScrollView>
                }
            </SafeAreaView >

        );
    }
}