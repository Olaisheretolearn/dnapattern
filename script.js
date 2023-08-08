function computeLPSArray(pattern, M, lps) {
    let length = 0;
    let i = 1;
    lps[0] = 0;
  
    while (i < M) {
      if (pattern[i] === pattern[length]) {
        length++;
        lps[i] = length;
        i++;
      } else {
        if (length !== 0) {
          length = lps[length - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
  }
  
  function KMPSearch(pattern, text) {
    pattern = pattern.toLowerCase();
    text = text.toLowerCase();
    let M = pattern.length;
    let N = text.length;
    let lps = new Array(M);
    let occurrences = [];
  
    let j = 0;
    computeLPSArray(pattern, M, lps);
  
    let i = 0;
    while (i < N) {
      if (pattern[j] === text[i]) {
        j++;
        i++;
      }
  
      if (j === M) {
        occurrences.push(i - j);
        j = lps[j - 1];
      } else if (i < N && pattern[j] !== text[i]) {
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          i = i + 1;
        }
      }
    }
  
    return occurrences;
  }
  
  function kmpMatch() {
    let text = document.getElementById('text').value;
    let pattern = document.getElementById('pattern').value;
    
    text = text.toLowerCase();
    pattern = pattern.toLowerCase();
    let indices = KMPSearch(pattern, text);
    let result = "";
  
    if (indices.length > 0) {
      let modifiedText = "";
      let startIndex = 0;
  
      for (let i = 0; i < indices.length; i++) {
        let endIndex = indices[i];
        modifiedText += text.substring(startIndex, endIndex);
        modifiedText += "<span style='background-color: yellow'>";
        modifiedText += text.substring(endIndex, endIndex + pattern.length);
        modifiedText += "</span>";
        startIndex = endIndex + pattern.length;
      }
  
      modifiedText += text.substring(startIndex);
      result = modifiedText;
  
      // Display indices at the bottom
      let indicesString = "Occurrences found at indices: " + indices.join(", ");
      result += "<br><br>" + indicesString;
    } else {
      result = text;
    }
  
    document.getElementById('result').innerHTML = result;

    // Create a bar chart with the number of occurrences
    let ctx = document.getElementById('myChart').getContext('2d');
    let labels = [];
    let data = [];
    let groupSize = 100;
    for (let i = 0; i < text.length; i += groupSize) {
        let count = indices.filter(index => index >= i && index < i + groupSize).length;
        labels.push(i + '-' + (i + groupSize - 1));
        data.push(count);
    }
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Occurrences',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
