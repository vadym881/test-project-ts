const crops = [
  "apple",
  "pear",
  "kiwi",
  "tomato",
  "cucumber",
  "blueberry",
  "wheat",
  "rue",
];
type CropsType = "Fruit" | "Vegetable" | "Berry" | "Grain" | "Unknown";

//variant1
//type CropWithTypeType = {title: string, type: CropsType}


class CropWithType {
    title: string;
    type: CropsType;
    constructor(title: string, type: CropsType) {
        this.title = title;
        this.type = type;
    }
}
//variant2
// type CropWithTypeType = CropWithType

//variant3
type CropWithTypeType =      CropWithType

const cropsWithTypes: CropWithTypeType[] = [];




for (const crop of crops) {
  const cropWithType: CropWithTypeType = { title: crop, type: defineCropType(crop) };
  cropsWithTypes.push(cropWithType);
}
console.log(cropsWithTypes.sort((a, b) => a.type.length - b.type.length))

console.log(crops.sort((a, b) => a.length - b.length));

for (const crop of crops) {
  //console.log(`${crop}: ${defineCropType(crop)}`)
}

const smallCrops = crops.filter((a) => a.length < 5);
//console.log(smallCrops)

const smallCrop = crops.find((a) => a.length < 5);
//console.log(smallCrop)

const result = defineCropType(crops[3]);
//console.log(result)

function defineCropType(crop: string): CropsType {
  let cropType: CropsType;
  switch (crop) {
    case "apple":
      cropType = "Fruit";
      break;
    case "pear":
      cropType = "Fruit";
      break;
    case "kiwi":
      cropType = "Fruit";
      break;
    case "tomato":
      cropType = "Vegetable";
      break;
    case "cucumber":
      cropType = "Vegetable";
      break;
    case "blueberry":
      cropType = "Berry";
      break;
    case "wheat":
      cropType = "Grain";
      break;
    default:
      cropType = "Unknown";
  }
  return cropType;
}
