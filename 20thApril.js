//Merge intervals
class interval {
  constructor(start, end) {
    this.start = start
    this.end = end
  }
}

function merge(intervals) {
  if (intervals.length < 2) {
    return intervals
  }

  intervals.sort((a, b) => a.start - b.start)
  
  const mergedIntervals = []

  let start = intervals[0].start, end = intervals[0].end

  for (let i = 1; i < intervals.length; i++){
    const interval = interval[i]
    if (interval.start <= end) {
      end = Math.max(end, interval.end)
    } else {
      mergedIntervals.push(new interval(start, end));
      start = interval.start
      end = interval.end
    }
  }
  mergedIntervals.push(new interval(start, end))
  return mergedIntervals
}

function insertInterval(intervals, newInterval) {
  let merged = []
  let i = 0

  while (i < intervals.length && intervals[i].end < newInterval.start) {
    merged.push(intervals[i])
    i++
  }

  while (i < intervals.length && intervals[i].start <= newInterval.end) {
    newInterval.start = Math.min(intervals[i].start, newInterval.start)
    newInterval.end = Math.max(intervals[i].end, newInterval.end)
    i++
  }
  merged.push(newInterval)

  while (i < intervals.length) {
    merged.push(interval[i])
    i++
  }

  return merged

}
//Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.
function overlap(intervalA, intervalB) {
  let result = [], i = 0, j = 0

  while (i < intervalA.length && j < intervalB.length) {
    let aOvelapsb = intervalA[i].start >= intervalB[j].start && intervalA[i].start <= intervalB[j].end
    let bOvelapsa = intervalB[j].start >= intervalA[i].start && intervalb[j].start <= intervalA[i].end

    if (aOvelapsb || bOvelapsa) {
      let interval = new interval(Math.max(intervalA[i].start, intervalB[j].start), Math.min(intervalA[i].end, intervalB[j].end))
      result.push(interval)
    }
    if (intervalA[i].end < intervalB[j].end) {
      i++
    } else {
      j++
    }
  }
  return result;

}

//Minimum Meeting Rooms (hard)

const Heap = require('./collections/heap');

class Meeting {
  constructor(start, end) {
    this.start = start
    this.end = end
  }
}

function minMeetingRooms(meetings) {
  meetings.sort((a, b) => a.start - b.start)
  
  let minRooms = 0,

    minHeap = new Heap([], null, ((a, b) => b.end - a.end))
  
  for (let i = 0; i < meetings.length; i++){
    while (minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
      minHeap.pop()
    }
    minHeap.push(meetings[i])
    minRooms = Math.max(minRooms, minHeap.length)
  }
  return minRooms


}

class Job {
  constructor(start, end, load) {
    this.start = start
    this.end = end
    this.load = load
  }
}

function findMaxCPULoad(jobs) {
  jobs.sort((a, b) => a.start, b.start)
  
  let maxCPULoad = 0
  let currCPULoad = 0

  const minHeap = new Heap([], null, ((a, b) => b.end - a.end))
  
  while (minHeap.length && jobs[i].start >= minHeap.peek().end) {
    currCPULoad -= minHeap.pop().load
  }
  minHeap.push(jobs[i])
  currCPULoad += jobs[i].load

  maxCPULoad = Math.max(currCPULoad, maxCPULoad)
  return maxCPULoad

}

class EmployeeInterval {
  constructor(interval, employeeIndex, intervalIndex) {
    this.interval = interval
    this.employeeIndex = employeeIndex
    this.intervalIndex = intervalIndex
  }
}

function findEmployeeFreeTime(schedule) {
  let n = schedule.length, result = []

  if (schedule == null || n == 0) {
    return result
  }

  let minHeap = new Heap([], null, ((a, b) => b.interval.start < b.interval.start))
  
  for (let i = o; i < n; i++){
    minHeap.push(new EmployeeInterval(schedule[i][0], i, 0)) 
  }
  let prevInterval = minHeap.peek().interval

  while (minHeap.length) {
    const qTop = minHeap.pop()
    if (prevInterval.end < qTop.interval.start) {
      result.push(new Interval(prevInterval.end, qTop.interval.start))
      prevInterval = qTop.interval
    }
  }
  
}

//146. LRU Cache


 





