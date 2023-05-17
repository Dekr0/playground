// Return the pivot index
function partition(low: number, high: number, arr: number[]): number {
    const pivot = arr[high];  // Ideally, it should pick from the middle instead

    // Position for the first element that is smaller than the pivot
    // Another way is to start at low - 1 (outside the bound) but remember to 
    // increment
    let idx = low;  

    // Move all elements that are smaller than the pivot to the left side of the 
    // pivot
    // Walk from the low to the high but not include the high because the high 
    // is the pivot
    for (let i = low; i < high; i++) {
        // If an element is less than the pivot, move to the left side of the 
        // pivot
        if (arr[i] <= pivot) {
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
            idx++;
        }
    }
    // Notice that both sides of the pivot don't need to be ordered => weakly sortedk

    // Move the pivot to the correct location after moving all elements that are 
    // smaller than the pivot
    arr[high] = arr[idx];
    arr[idx] = pivot;

    return idx
}

function qsort(low: number, high: number, arr: number[]): void {
    if (low >= high) return;

    const pivotIndex = partition(low, high, arr);

    // Excluding the pivot
    qsort(low, pivotIndex - 1, arr);  // Quick sort the left side of the pivot
    qsort(pivotIndex + 1, high, arr);  // Quick sort the right side of the pivot
}


// Starter bound [low, high] => Unusual because high is commonly exclusive
export default function quick_sort(arr: number[]): void {
    qsort(0, arr.length - 1, arr);
}
