import React from 'react';
import { SafeAreaView, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

const symptoms = [
    {
        "symptom": "Fever Or Chills",

        "character": "Fever is accompanied by cold and flu and thus is similar to that of influenza(flu). Fever can only be differentiated by other clinical symptoms and lab tests",

        "treatment": "1) Crushed Garlic:   It is one of the widely used remedy for fever, cough and cold. Garlic has antibacterial properties and hence it has great healing power for fever, cough and cold. You can take 4-6 crushed garlic cloves and consume it directly. If you are not very comfortable with the strong flavour and smell then you can also take it with curd. \n\n\n 2) Ginger:   In Ayurveda, ginger has been used for centuries to cure various ailments. It can easily fight infections, bacteria and any inflammation in your body. If you are prone to infections easily, then you should consume ginger tea often. You make lemon tea and add few slice of ginger in it. Try to substitute sugar with Jiva Honey and you will get benefit. \n\n\n 3) Cinnamon:   This aromatic spice can give you great relief in throat infection, cough and cold. It is an antibiotic which has the capacity to prevent any flu. You can consume it in your tea. It will give flavour, aroma and taste to your beverage and you will also enjoy its benefit.\n\nHomeopathy medicines have been found very effective in the treatment of Fever. For medicine dose, seek doctor's advice."
    },
    {
        "symptom": "Cough",
        
        "character": "Cough is present in about half of infected patients. Considering that COVID-19 irritates lung tissue, the cough is dry and persistent. It is accompanied with shortness of breath and muscle pain. As disease progresses, the lung tissue is filled with fluid and you may feel even more short of breath as your body struggles to get enough oxygen.",

        "treatment": "If you are suffering from Dry cough, try out these effective Ayurvedic home remedies: \n\n 1)Before bedtime, take warm milk with turmeric and honey. This works as a natural antibiotic.\n\n2)Consume turmeric powder mixed with honey three times a day.\n\n3)Licorice (Mulethi) lozenges to reduce inflammation.\n\n4)Use the decoction of Sauf (Ani seeds) as the base water to make coffee or tea.\n\n5)Sooth your infected throat pipe with natural cough syrup made by mixing ginger and honey. Boil a piece of ginger (peeled) in water. Filter and mix 1 tsp of honey and consume. You can even chew small pieces of ginger sprinkled with water for its anti-inflammatory properties.\n\n6)Add a pinch of cinnamon powder in warm water or tea for relief from throat irritability.\n\n7)Drink tea made of Tulsi (Basil leaves), ginger and honey.\n8)You can chew Tulsi leaves throughout the day for faster recovery.\n\nHomeopathy medicines have been found very effective in the treatment of Cough. For medicine dose, seek doctor's advice."
    },
    {
        "symptom": "Fatigue",

        "character": "Fatigue is a common symptom in Corona Fever, and thus seems similar to dengue. Differentiating symptoms are:- ",

        "treatment": "1) Chyawanprash (a ayurvedic food supplement) is recommended as it helps to get rid of toxins and boosts the immunes system. Take mixed in hot water.\n\n2) It's important to stay hydrated  - drink plenty of fluids.\n\n3) Avoid excess of spicy and sour foods.\n\n4) To stimulate the digestive fire drink grated ginger in lemon juice.\n\n5) Eat peeled almonds soaked in water every morning as they help strengthen the immune system.\n\nHomeopathy medicines have been found very effective in the treatment of Fatigue. For medicine dose, seek doctor's advice.",

        "heading": ["Dengue", "COVID-19"],

        "data": [["Fever is accompanied by severe headache, eye pain, and body pains.", "There is a history of exposure to positive cases."], ["Nausea and Vomiting", "Cough"], ["Restlessness", "Shortness of breath or difficult breathing, Loss of taste or smell, Sore throat, Diarrhea"], ["Lab Tests :- \n 1)  Less WBC count. \n 2)  Platelets decrease \n 3)  NS1 more than 1", "Lab tests:- \n 1) Swab tests positive for virus"]],
    },
    {
        "symptom": "Shortness of breath or difficulty in breathing",

        "character": "Shortness of breath with fever and small history of appearance is one of the hallmark symptoms of COVID-19",

        "treatment": "It's a medicine emergency. Seek doctor's advice"
    },
    {
        "symptom": "Sore Throat",

        "character": "Tonsillitis itself is not a symptom of COVID-19. The classical symptoms of Tonsillitis are enlarged lymph nodes, swollen tonsils, bad breath, and stiff neck that are not typically seen in patients with COVID-19.",

        "treatment": "Lozenges, gargles, and hot drinks might help."
    },
    {
        "symptom": "Pneumonia",

        "character": "Most people who get COVID-19 have mild or moderate symptoms like coughing, a fever, and shortness of breath. But some who catch the new coronavirus get severe pneumonia in both lungs. COVID-19 pneumonia is a serious illness that can be deadly. If your COVID-19 infection starts to cause pneumonia, you may notice things like: \n\n 1) Rapid heartbeat \n\n 2) Shortness of breath or breathlessness \n\n 3) Rapid breathing \n\n 4) Dizziness \n\n 5) Heavy sweating",

        "treatment": "Seek medical advice"
    }
]

export default class SymptomsScreen extends React.Component {
    constructor() {
        super();
        this.state={
            inMemorySymptoms: [],
            symptoms: [],
            symptom: ""
        }
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({item, index}) => {
        return (
            <ListItem 
                key={index}
                style={{backgroundColor: '#dddddd', padding: 10}}
                containerStyle={{flex: 1}}
                title={item.symptom}
                titleStyle={{fontFamily: "Regular"}}
                activeOpacity={0.6}
                underlayColor="#dddddd"
                bottomDivider
                rightElement={
                    <TouchableOpacity 
                        style={{alignItems: 'center', backgroundColor: 'orange', padding: 10, justifyContent: "center", marginTop: 3}} 
                        onPress={() => {
                            this.props.navigation.navigate("SymptomData", item);
                            console.log("Clicked");
                        }} 
                    >
                        <Text>View</Text>
                    </TouchableOpacity>
                }
            />
        );
    }

    searchSymptom = (value) => {
        const filteredSymptoms = this.state.inMemorySymptoms.filter((symptom) => {
            let symptomLowercase = (symptom.symptom).toLowerCase();
            let searchSymptomLowercase = value.toLowerCase();
            return symptomLowercase.indexOf(searchSymptomLowercase) > -1;
        });

        this.setState({
            symptoms: filteredSymptoms
        });
    }

    componentDidMount() {
        this.setState({
            symptoms: symptoms,
            inMemorySymptoms: symptoms
        });

        console.log(this.state.symptoms);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <SafeAreaView style={{backgroundColor: "#2f363c"}}/>

                <TextInput 
                    placeholder={"Search"}
                    placeholderTextColor="#dddddd"
                    style={{
                        backgroundColor: "#2f363c",
                        height: 50, 
                        fontSize: 36,
                        padding: 10,
                        color: "#fff",
                        borderBottomWidth: 0.5, 
                        fontFamily: "SemiBold",
                        borderColor: "#7d90a0"
                    }}
                    onChangeText={(value) => this.searchSymptom(value)}
                />

                <View style={{flex: 1, backgroundColor: "#00716f"}}> 
                    <FlatList
                        data={this.state.symptoms}
                        key={this.keyExtractor}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        );
    }
}